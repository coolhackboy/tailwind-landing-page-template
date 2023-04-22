// components/SearchResult.tsx
import React from 'react';

export interface SearchResultProps {
    data: any;
    searchQuery: string;
    country: string;
}

const SearchResult: React.FC<SearchResultProps> = ({ data, searchQuery, country }) => {
    const categories = Object.keys(data);
    // 遍历所有的分类获取结果数量
    const totalResults = categories.reduce((acc, category) => {
        if (category === 'related') {
            return acc + data[category].length;
        } else {
            return acc + Object.keys(data[category]).length;
        }
    }, 0);


    const renderCategories = () => {
        return categories.map((category) => {
            if (category === "related") {
                const items = data[category];
                if (items.length > 0) {
                    return (
                        <div key={category} id={category}>
                            <div className="pb-5 text-left mt-5">
                                <h3 className="border-indigo-500 text-indigo-600 whitespace-nowrap flex py-4 px-1 border-b-2 font-medium text-sm">
                                    {items.length} {category}
                                </h3>
                            </div>
                            <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {items.map((item: string, index: number) => (
                                    <li key={`${category}-${index}`} className='hover:underline decoration-indigo-300 decoration-2 hover:text-indigo-600'>
                                        <a href={`https://www.google.com/search?q=${encodeURIComponent(item)}`} target="_blank" rel="noreferrer">{item}</a>
                                    </li>
                                ))}
                            </ul>
                            <hr className="my-8 mx-auto w-8 h-8 bg-indigo-100 rounded border-0 md:my-12" />
                        </div>
                    );
                }
            } else {
                const subcategories = data[category];
                return (
                    <div key={category} id={category}>
                        <div className="pb-5 text-left mt-5">
                            <h3 className="border-indigo-500 text-indigo-600 whitespace-nowrap flex py-4 px-1 border-b-2 font-medium text-sm">
                                {Object.keys(subcategories).length} {category}
                            </h3>
                        </div>
                        <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {Object.keys(subcategories).map((subcategory) => {
                                const items = subcategories[subcategory];
                                if (items.length > 0) {
                                    return (
                                        <li key={`${category}-${subcategory}`} className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
                                            <div className="flex w-full items-center justify-between space-x-6 p-6">
                                                <div className="flex-1 truncate">
                                                    <div className="flex items-center space-x-3">
                                                        <div className="">
                                                            <span className="bg-indigo-100 text-indigo-800 text-sm mr-2 px-2.5 py-0.5 rounded">
                                                                {subcategory}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="mt-1 truncate text-sm text-gray-500">
                                                        <ul className="text-left list-disc">
                                                            {items.map((item: string, index: number) => (
                                                                <li key={`${category}-${subcategory}-${index}`} className="hover:underline decoration-indigo-300 decoration-2 hover:text-indigo-600">
                                                                    <a href={`https://www.google.com/search?q=${encodeURIComponent(item)}`} target="_blank" rel="noreferrer">{item}</a>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    );
                                }
                                return null;
                            })}
                        </ul>
                        <hr className="my-8 mx-auto w-8 h-8 bg-indigo-100 rounded border-0 md:my-12" />
                    </div>
                );
            }
            return null;
        });
    };




    return (
        <div className="mt-8">
            <h2 className="text-3xl font-medium leading-8 text-gray-900 text-left mb-5">
                <span className="bg-indigo-100 text-indigo-600 mr-3 py-0.5 px-1.5 rounded-full">{totalResults}</span>
                Results: <span className="underline decoration-blue-300 text-indigo-500">{searchQuery}</span>
            </h2>
            <div className="hidden sm:block">
                <div className="border-b border-gray-200">
                    <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                        {Object.keys(data).map((category) => (
                            <a
                                key={category}
                                href={`#${category}`}
                                className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200 whitespace-nowrap flex py-4 px-1 border-b-2 font-medium text-sm"
                            >
                                {category.toUpperCase()}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
            <div className="mx-auto max-w-7xl sm:px-1 lg:px-1">
                {renderCategories()}
            </div>
        </div>
    );
};

export default SearchResult;

