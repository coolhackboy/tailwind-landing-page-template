import React, { useState } from 'react'
import axios from 'axios'

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('')
  const [country, setCountry] = useState('en')

  const handleSubmit = async (event: any) => {
    event.preventDefault()

    try {
      const response = await axios.get('/api/search', {
        params: {
          q: searchTerm,
          country: country
        }
      })
      console.log(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="mt-10 flex justify-center gap-x-6">
      <form onSubmit={handleSubmit} className="flex items-center md:w-full sm:w-full lg:w-2/3" data-gtm-form-interact-id="0">
        <label htmlFor="voice-search" className="sr-only">Search</label>
        <div className="relative w-full">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"></path>
            </svg>
          </div>
          <input
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
    </div>
  )
}
