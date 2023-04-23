import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SearchResult, { SearchResultProps } from '@/components/search-result';
import styled, { keyframes } from 'styled-components';
import { event } from "nextjs-google-analytics";


const inputHighlight = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.8);
  }
  70% {
    box-shadow: 0 0 0 15px rgba(37, 99, 235, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(37, 99, 235, 0);
  }
`;

const AnimatedInput = styled.input`
  animation: ${inputHighlight} 2s infinite;
  animation-delay: 0.5s;
  &:focus {
    outline: none;
    border-color: blue;
    box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.5);
  }
`;


export default function Home() {
    const [searchTerm, setSearchTerm] = useState('');
    const [country, setCountry] = useState('en');
    const [searchResult, setSearchResult] = useState<SearchResultProps>({
        data: null,
        searchQuery: '',
        country: '',
    });
    const [loading, setLoading] = useState(false);

    console.log(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID)

    const handleSubmit = async (query: string) => {
        setLoading(true);
        try {
            const response = await axios.get('/api/search', {
                params: {
                    q: query,
                    country: country,
                },
            });
            setSearchResult({ data: response.data, searchQuery: query, country: country });
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleExampleClick = (example: string) => {
        setSearchTerm(example);
        handleSubmit(example);
    };

    const handleFormSubmit = (e: any) => {
        e.preventDefault();
        handleSubmit(searchTerm);
        event("submit_form", {
            category: "Contact",
            label: searchTerm,
        });
    };

    return (
        <div>
            <div className="mt-10 flex justify-center gap-x-6">
                <form onSubmit={handleFormSubmit} className="flex items-center md:w-full sm:w-full lg:w-2/3" data-gtm-form-interact-id="0">
                    <div className="relative w-full">
                        <AnimatedInput
                            id="voice-search"
                            type="text"
                            className="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                            placeholder="Enter a topic, brand, or product..."
                            required
                            value={searchTerm}
                            onChange={(event) => setSearchTerm(event.target.value)}
                        />
                    </div>
                    <select
                        id="countries"
                        className="ml-1 w-1/3 bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block min-w-fit p-2.5"
                        value={country}
                        onChange={(event) => setCountry(event.target.value)}
                    >
                        <option value="am">Amharic</option>
                        <option value="ar">Arabic</option>
                        <option value="eu">Basque</option>
                        <option value="bn">Bengali</option>
                        <option value="en-GB">English (UK)</option>
                        <option value="pt-BR">Portuguese (Brazil)</option>
                        <option value="bg">Bulgarian</option>
                        <option value="ca">Catalan</option>
                        <option value="chr">Cherokee</option>
                        <option value="hr">Croatian</option>
                        <option value="cs">Czech</option>
                        <option value="da">Danish</option>
                        <option value="nl">Dutch</option>
                        <option value="en">English (US)</option>
                        <option value="et">Estonian</option>
                        <option value="fil">Filipino</option>
                        <option value="fi">Finnish</option>
                        <option value="fr">French</option>
                        <option value="de">German</option>
                        <option value="el">Greek</option>
                        <option value="gu">Gujarati</option>
                        <option value="iw">Hebrew</option>
                        <option value="hi">Hindi</option>
                        <option value="hu">Hungarian</option>
                        <option value="is">Icelandic</option>
                        <option value="id">Indonesian</option>
                        <option value="it">Italian</option>
                        <option value="ja">Japanese</option>
                        <option value="kn">Kannada</option>
                        <option value="ko">Korean</option>
                        <option value="lv">Latvian</option>
                        <option value="lt">Lithuanian</option>
                        <option value="ms">Malay</option>
                        <option value="ml">Malayalam</option>
                        <option value="mr">Marathi</option>
                        <option value="no">Norwegian</option>
                        <option value="pl">Polish</option>
                        <option value="pt-PT">Portuguese (Portugal)</option>
                        <option value="ro">Romanian</option>
                        <option value="ru">Russian</option>
                        <option value="sr">Serbian</option>
                        <option value="zh-CN">Chinese (PRC)</option>
                        <option value="sk">Slovak</option>
                        <option value="sl">Slovenian</option>
                        <option value="es">Spanish</option>
                        <option value="sw">Swahili</option>
                        <option value="sv">Swedish</option>
                        <option value="ta">Tamil</option>
                        <option value="te">Telugu</option>
                        <option value="th">Thai</option>
                        <option value="zh-TW">Chinese (Taiwan)</option>
                        <option value="tr">Turkish</option>
                        <option value="ur">Urdu</option>
                        <option value="uk">Ukrainian</option>
                        <option value="vi">Vietnamese</option>
                        <option value="cy">Welsh</option>
                    </select>
                    <button
                        type="submit"
                        className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                        <span className="sr-only">Search</span>
                    </button>
                </form>

                {loading && (
                    <div className="fixed inset-0 flex items-center justify-center z-50">
                        <div className="animate-spin w-16 h-16 border-t-4 border-b-4 border-blue-500 rounded-full"></div>
                    </div>
                )}
            </div>

            <div className="mt-5 flex justify-center gap-x-6">
                <ul>
                    <li className="ml-1 inline-flex items-center px-3 py-0.5 rounded-full text-sm text-gray-500">eg.</li>
                    <li
                        className=" cursor-pointer m-1 inline-flex items-center px-3 py-0.5 rounded-full text-sm bg-blue-50 text-blue-600" onClick={() => handleExampleClick('chatgpt')}>
                        chatgpt
                    </li>
                    <li
                        className=" cursor-pointer m-1 inline-flex items-center px-3 py-0.5 rounded-full text-sm bg-blue-50 text-blue-600" onClick={() => handleExampleClick('stable diffusion')}>
                        stable diffusion
                    </li>
                    <li
                        className=" cursor-pointer m-1 inline-flex items-center px-3 py-0.5 rounded-full text-sm bg-blue-50 text-blue-600" onClick={() => handleExampleClick('midjourney')}>
                        midjourney
                    </li>
                    <li
                        className=" cursor-pointer m-1 inline-flex items-center px-3 py-0.5 rounded-full text-sm bg-blue-50 text-blue-600" onClick={() => handleExampleClick('tesla')}>
                        tesla
                    </li>
                    <li
                        className=" cursor-pointer m-1 inline-flex items-center px-3 py-0.5 rounded-full text-sm bg-blue-50 text-blue-600" onClick={() => handleExampleClick('richard branson')}>
                        richard branson
                    </li>
                </ul>
            </div>

            {/* Render SearchResult component below the form */}
            {searchResult.data && (
                <div className="mt-10">
                    <SearchResult data={searchResult.data} searchQuery={searchResult.searchQuery} country={searchResult.country} />
                </div>
            )}
        </div>
    )
}
