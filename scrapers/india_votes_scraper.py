import requests
from bs4 import BeautifulSoup
import time

def scrape_india_votes(election_url):
    headers = {'User-Agent': 'Mozilla/5.0'}
    try:
        response = requests.get(election_url, headers=headers)
        if response.status_code == 200:
            soup = BeautifulSoup(response.text, 'html.parser')
            # Example: Extract constituency results
            results = {}
            tables = soup.find_all('table', {'class': 'results-table'})
            for table in tables:
                rows = table.find_all('tr')
                for row in rows[1:]:  # Skip header
                    cols = row.find_all('td')
                    if len(cols) >= 3:
                        party = cols[0].text.strip()
                        votes = cols[2].text.strip()
                        results[party] = votes
            return results
        else:
            print(f"Failed to fetch data: Status {response.status_code}")
            return None
    except Exception as e:
        print(f"Error: {e}")
        return None

# Example usage (test for 2024 Lok Sabha)
# results = scrape_india_votes("https://www.indiavotes.com/ls2024")
# print(results)
