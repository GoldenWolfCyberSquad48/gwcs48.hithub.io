/* ================= PDF DOWNLOAD SCRIPT ================= */

/*
Features:
1. Topic-wise PDF content
2. Clean structured text
3. Reusable function
4. Front-end only (Blob API)
*/

function downloadPDF(topic) {

    let content = "";
    let filename = "";

    switch (topic) {

        case "signals":
            filename = "Instagram_Algorithm_Signals.pdf";
            content = `
INSTAGRAM ALGORITHM SIGNALS
==========================

1. WATCH TIME
- How long users watch your content
- Higher watch time = better reach

2. RETENTION
- Percentage of users who watch till the end
- Looping videos improve retention

3. SAVES (HIGH VALUE)
- Indicates useful or educational content
- One of the strongest ranking signals

4. SHARES
- Content shared with others
- Direct reach booster

5. COMMENTS
- Discussions increase engagement score

SUMMARY:
These signals decide how far your content is distributed.
`;
            break;

        case "rules":
            filename = "Reel_Rules_Growth_Guide.pdf";
            content = `
REEL RULES FOR GROWTH
====================

1. FIRST 3 SECONDS
- Strong hook is mandatory
- Avoid slow introductions

2. REEL LENGTH
- 7–10 seconds works best
- Short loops increase replays

3. NICHE CLARITY
- Stick to one topic
- Build a loyal audience

4. CONSISTENCY
- Post regularly
- Algorithm trusts consistency

5. CAPTIONS & CTA
- Ask questions
- Encourage comments

FINAL NOTE:
Follow these rules for stable and organic growth.
`;
            break;

        case "mistakes":
            filename = "Instagram_Common_Mistakes.pdf";
            content = `
COMMON INSTAGRAM MISTAKES
========================

1. WATERMARK VIDEOS
- Reposting with watermark reduces reach

2. SPAM POSTING
- Too many posts confuse the algorithm

3. FAKE ENGAGEMENT
- Bots and fake likes hurt account trust

4. IRRELEVANT HASHTAGS
- Reduces content accuracy

5. LOW QUALITY CONTENT
- Poor visuals reduce watch time

AVOID THESE TO MAINTAIN REACH.
`;
            break;

        case "ideas":
            filename = "Viral_Content_Ideas.pdf";
            content = `
VIRAL CONTENT IDEAS
===================

1. POV REELS
- Relatable situations
- High share potential

2. EDUCATIONAL TIPS
- Short & valuable knowledge
- High save rate

3. MISTAKE BASED CONTENT
- What not to do
- Builds authority

4. MYTH VS REALITY
- Clears confusion
- Creates engagement

5. BEFORE VS AFTER
- Strong visual contrast
- High retention

USE THESE IDEAS CONSISTENTLY.
`;
            break;

        default:
            alert("Invalid topic selected");
            return;
    }

    // Create PDF Blob
    const blob = new Blob([content], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);

    // Create temporary link
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();

    // Clean up
    URL.revokeObjectURL(url);
}
