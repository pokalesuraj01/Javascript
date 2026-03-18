 function analyzeText() {
            var text = document.getElementById("inputText").value;

            // Extract valid words (only alphabets)
            var words = text.match(/\b[a-zA-Z]+\b/g);

            if (!words) {
                document.getElementById("output").innerHTML = "No valid words found.";
                return;
            }

            var totalWords = words.length;

            var longestWord = words[0];
            var shortestWord = words[0];

            for (var i = 0; i < words.length; i++) {
                if (words[i].length > longestWord.length) {
                    longestWord = words[i];
                }
                if (words[i].length < shortestWord.length) {
                    shortestWord = words[i];
                }
            }

            var countMoreThan4 = 0;
            for (var i = 0; i < words.length; i++) {
                if (words[i].length > 4) {
                    countMoreThan4++;
                }
            }

            // Create list of words
            var wordList = "";
            for (var i = 0; i < words.length; i++) {
                wordList += words[i] + "<br>";
            }

            // Display output
            document.getElementById("output").innerHTML =
                "Total Words: " + totalWords + "<br>" +
                "Longest Word: " + longestWord + "<br>" +
                "Shortest Word: " + shortestWord + "<br>" +
                "Words with more than 4 characters: " + countMoreThan4 + "<br><br>" +
                "Valid Words:<br>" + wordList;
        }