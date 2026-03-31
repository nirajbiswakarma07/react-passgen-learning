import { useState } from "react";



const PasswordGenerator = () => {
  const [anime,setAnime] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");

  const handleSubit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResult("");

    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 10000);

      const response = await fetch(
        "http://127.0.0.1:8000/generate?info_name=" + anime,
        { signal: controller.signal }
      );

      clearTimeout(timeout);

      if (!response.ok) {
        throw new Error("Server error: " + response.status);
      }

      const data = await response.json();
      setResult(data.answer);

    } catch (err) {
      if (err.name === "AbortError") {
        setError("Request timed out. Try again.");
      } else {
        setError("Something went wrong. Please try again later");
      }
    }

    setLoading(false);
    setAnime("")
  };

  return (
    <div className='mt-5 p-4 h-screen'>
        <p className='text-center text-2xl font-light mt-5 text-green-800'>Generate password from your favourite anime or movie without typing. I'll give you one to remember.</p>
        <p className='text-center text-2xl font-semibold mt-5 text-green-800'>😉 Use your favourite anime or movie.</p>
        <br />
        <div className="flex justify-center">
          <form onSubmit={handleSubit} className="p-5 m-5 w-[50%]">
          <div className="sm:col-span-4 mb-5">
          <label htmlFor="anime" className="block text-sm/6 font-medium text-gray-900">Fav Anime/Movie:</label>
          <div className="mt-2">
            <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
              <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6"></div>
              <input required onChange={(e)=>setAnime(e.target.value)} autoComplete="off" id="anime" value={anime} type="text" name="anime" placeholder="Enter you fav movie/anime" className="block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" />
            </div>
          </div>
          </div>
          <input type="submit" className="bg-teal-600 rounded-xl font-semibold text-xl p-2" value="Generate"/>
          </form>
        </div>

        {/* Loading */}
        {loading && (
          <h3 className="text-center text-xl">Generating answer...</h3>
        )}

        {/* Result */}
        {!loading && result && (
          <div className="flex justify-center items-center gap-4 mt-5">
            <div className="relative group inline-block">
              <button
                onClick={() => {
                  navigator.clipboard.writeText(result);
                  setCopied(true);
                  setTimeout(() => setCopied(false), 1500);
                }}
                className="inline-flex items-center cursor-pointer rounded-md bg-orange-300 p-10 text-4xl h-30 w-full text-black font-extrabold">
                {result}
              </button>

              {/* Tooltip */}
              <span className="absolute left-1/2 -translate-x-1/2 -top-10 whitespace-nowrap rounded bg-gray-800 px-3 py-1 text-sm text-white opacity-0 group-hover:opacity-100 transition">
                {copied ? "Copied" : "Click to copy"}
              </span>

            </div>
          </div>
        )}
        
        {/* Error message if server error */}
        {error && (
          <p className="text-red-600 text-center mt-4 text-lg">
            {error}
          </p>
        )}
    </div>
  )
}

export default PasswordGenerator
