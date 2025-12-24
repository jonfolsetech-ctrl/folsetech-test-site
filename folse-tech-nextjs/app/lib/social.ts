interface TwitterPayload {
  text: string;
}

interface LinkedInPayload {
  commentary: string;
  visibility: "PUBLIC" | "CONNECTIONS_ONLY";
}

interface InstagramPayload {
  caption: string;
  image_url: string;
}

export async function postToTwitter(text: string): Promise<string> {
  const response = await fetch("https://api.twitter.com/2/tweets", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`,
    },
    body: JSON.stringify({ text }),
  });

  if (!response.ok) {
    throw new Error(`Twitter API error: ${response.statusText}`);
  }

  const data = (await response.json()) as { data: { id: string } };
  return data.data.id;
}

export async function postToLinkedIn(
  text: string,
  userId: string
): Promise<string> {
  const response = await fetch(
    `https://api.linkedin.com/v2/ugcPosts`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.LINKEDIN_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({
        author: `urn:li:person:${userId}`,
        lifecycleState: "PUBLISHED",
        specificContent: {
          "com.linkedin.ugc.ShareContent": {
            shareCommentary: {
              text: text,
            },
            shareMediaCategory: "NONE",
          },
        },
        visibility: {
          "com.linkedin.ugc.MemberNetworkVisibility": "PUBLIC",
        },
      }),
    }
  );

  if (!response.ok) {
    throw new Error(`LinkedIn API error: ${response.statusText}`);
  }

  const data = (await response.json()) as { id: string };
  return data.id;
}

export async function postToInstagram(
  caption: string,
  imageUrl: string
): Promise<string> {
  // Instagram requires image upload to Facebook's servers first
  const uploadResponse = await fetch(
    `https://graph.instagram.com/v18.0/${process.env.INSTAGRAM_BUSINESS_ACCOUNT_ID}/media`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        image_url: imageUrl,
        caption: caption,
        access_token: process.env.INSTAGRAM_ACCESS_TOKEN,
      }),
    }
  );

  if (!uploadResponse.ok) {
    throw new Error(`Instagram API error: ${uploadResponse.statusText}`);
  }

  const uploadData = (await uploadResponse.json()) as { id: string };

  // Publish the media
  const publishResponse = await fetch(
    `https://graph.instagram.com/v18.0/${process.env.INSTAGRAM_BUSINESS_ACCOUNT_ID}/media_publish`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        creation_id: uploadData.id,
        access_token: process.env.INSTAGRAM_ACCESS_TOKEN,
      }),
    }
  );

  if (!publishResponse.ok) {
    throw new Error(`Instagram publish error: ${publishResponse.statusText}`);
  }

  const publishData = (await publishResponse.json()) as { id: string };
  return publishData.id;
}
