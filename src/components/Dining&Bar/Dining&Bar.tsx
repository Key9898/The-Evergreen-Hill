import { useState, useEffect } from "react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import ScrollToTopButton from "../Layout/ScrollToTopButton";
import DiningAndBarBanner from "./Dining&BarBanner";
import ChefSection from "./ChefSection";
import DiningAndBarTabs from "./Dining&BarTabs";
import Breakfast from "./Breakfast";
import AllDayDining from "./AllDayDining";
import Dinner from "./Dinner";
import BarAndLounge from "./Bar&Lounge";
import DiningAndBarPagination from "./Dining&BarPagination";

interface DiningAndBarProps {
  onNavigate?: (page: string) => void
}

export default function DiningAndBar({ onNavigate }: DiningAndBarProps) {
  const [activeTab, setActiveTab] = useState('All Menues');

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 2;

  // Reset to first page when switching tabs
  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab]);

  // Total posts per tab (update if data changes)
  const tabCounts: Record<string, number> = {
    'Breakfast': 4,
    'All-Day Dining': 4,
    'Dinner': 2,
    'Bar & Lounge': 4,
  };
  const totalPosts = tabCounts[activeTab] ?? 0;
  const totalPages = Math.max(1, Math.ceil(totalPosts / postsPerPage));

  // All Menues pagination config (4 pages; page 3/4 omit Dinner)
  // const isAllMenues = activeTab === 'All Menues';
  const allMenusTotalPages = 4;
  const allMenusPostsPerPage = currentPage <= 2 ? 4 : 3;
  const allMenusTotalPosts =
    Math.min(tabCounts['Breakfast'], 4) +
    Math.min(tabCounts['All-Day Dining'], 4) +
    Math.min(tabCounts['Bar & Lounge'], 4) +
    Math.min(tabCounts['Dinner'], 2);

  return (
    <div className="min-h-screen -mt-5">
      <Header onNavigate={onNavigate} activePage="experiences" />
      <div className="relative -mt-20 sm:-mt-24">
        <DiningAndBarBanner onNavigate={onNavigate} />
      </div>

      {/* Chef Section */}
      <ChefSection />

      {/* Tabs */}
      <DiningAndBarTabs activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Tab-specific content */}
      {activeTab === 'Breakfast' && (
        <Breakfast currentPage={currentPage} postsPerPage={postsPerPage} />
      )}
      {activeTab === 'All-Day Dining' && (
        <AllDayDining currentPage={currentPage} postsPerPage={postsPerPage} />
      )}
      {activeTab === 'Dinner' && (
        <Dinner currentPage={currentPage} postsPerPage={postsPerPage} />
      )}
      {activeTab === 'Bar & Lounge' && (
        <BarAndLounge currentPage={currentPage} postsPerPage={postsPerPage} />
      )}

      {/* Pagination for active tab only */}
      {activeTab !== 'All Menues' && (
        <DiningAndBarPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          totalPosts={totalPosts}
          postsPerPage={postsPerPage}
        />
      )}

      {/* All Menues: 2x2 grid, one card from each category */}
      {activeTab === 'All Menues' && (
        <>
          <section className="py-16 pt-0 pb-14 lg:py-16 lg:pt-16 lg:pb-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="grid grid-cols-1 gap-x-6 gap-y-16 sm:grid-cols-2">
                <Breakfast currentPage={currentPage} postsPerPage={1} renderMode="card" />
                <AllDayDining currentPage={currentPage} postsPerPage={1} renderMode="card" />
                {currentPage <= 2 && (
                  <Dinner currentPage={currentPage} postsPerPage={1} renderMode="card" />
                )}
                <BarAndLounge currentPage={currentPage} postsPerPage={1} renderMode="card" />
              </div>
            </div>
          </section>

          <DiningAndBarPagination
            currentPage={currentPage}
            totalPages={allMenusTotalPages}
            onPageChange={setCurrentPage}
            totalPosts={allMenusTotalPosts}
            postsPerPage={allMenusPostsPerPage}
          />
        </>
      )}

      {/* Footer */}
      <ScrollToTopButton />
      <Footer onNavigate={onNavigate} />
    </div>
  )
}