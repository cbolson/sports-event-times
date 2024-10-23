import React, { useState } from 'react';
import { Trophy } from 'lucide-react';
import SearchBar from './components/SearchBar';
import EventCard from './components/EventCard';

// Simulated event data (in a real app, this would come from an API)
const events = {
  'formula 1': {
    title: 'Formula 1 Miami Grand Prix 2024',
    date: 'May 5, 2024',
    time: '3:30 PM EST',
    location: 'Miami International Autodrome, Miami Gardens, FL',
    imageUrl: 'https://images.unsplash.com/photo-1541773367336-d5c4e800c259?auto=format&fit=crop&q=80&w=800',
  },
  'tennis': {
    title: 'Roland-Garros French Open 2024',
    date: 'May 20 - June 9, 2024',
    time: 'Various Times',
    location: 'Stade Roland Garros, Paris, France',
    imageUrl: 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fit=crop&q=80&w=800',
  },
};

function App() {
  const [searchResult, setSearchResult] = useState<typeof events[keyof typeof events] | null>(null);
  const [error, setError] = useState('');

  const handleSearch = (query: string) => {
    const normalizedQuery = query.toLowerCase().trim();
    const result = events[normalizedQuery as keyof typeof events];
    
    if (result) {
      setSearchResult(result);
      setError('');
    } else {
      setSearchResult(null);
      setError('No upcoming events found for this search. Please try another sport.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Trophy className="h-12 w-12 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Sports Event Finder
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find upcoming sports events and their schedules. Try searching for "Formula 1" or "Tennis".
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <SearchBar onSearch={handleSearch} />
        </div>

        {error && (
          <div className="text-center text-red-500 mb-8">
            {error}
          </div>
        )}

        {searchResult && (
          <div className="max-w-2xl mx-auto">
            <EventCard {...searchResult} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;