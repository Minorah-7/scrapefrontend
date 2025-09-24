"use client";
import { useEffect, useState } from 'react';

export default function TestProxyPage() {
  const [response, setResponse] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Test the proxy with a simple GET request
    async function testProxy() {
      try {
        const res = await fetch('/api/navigation');
        if (!res.ok) {
          throw new Error(`Response status: ${res.status}`);
        }
        const data = await res.json();
        setResponse(JSON.stringify(data, null, 2));
        // Also check the actual URL being called
        setError(`Request made to: ${res.url}`);
      } catch (err) {
        setError(`Error: ${err instanceof Error ? err.message : String(err)}`);
      }
    }

    testProxy();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Proxy Test Results</h1>
      
      {error && (
        <div className="mb-4 p-4 bg-yellow-100 text-yellow-800 rounded">
          {error}
        </div>
      )}
      
      {response && (
        <div className="bg-gray-100 p-4 rounded">
          <h2 className="text-lg font-semibold mb-2">Response Data:</h2>
          <pre className="whitespace-pre-wrap font-mono text-sm">{response}</pre>
        </div>
      )}
    </div>
  );
}