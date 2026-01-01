# AI Content Generation & Auto-Posting Guide

## Overview

Folse Tech's AI content system automatically:
1. Generates blog posts using Claude AI
2. Creates optimized social media posts
3. Posts to Twitter, LinkedIn, and Instagram
4. Tracks all content in your blog

## Setup

### 1. Get API Keys

**Claude API (Required for blog generation):**
- Go to [console.anthropic.com](https://console.anthropic.com)
- Create an API key
- Add to `.env.local`: `ANTHROPIC_API_KEY=sk-ant-...`

**Twitter API (Optional for auto-posting):**
- Go to [developer.twitter.com](https://developer.twitter.com)
- Create an app with read/write permissions
- Get your Bearer Token
- Add to `.env.local`: `TWITTER_BEARER_TOKEN=AAAA...`

**LinkedIn API (Optional for auto-posting):**
- Go to [linkedin.com/developers](https://www.linkedin.com/developers)
- Create an app and get access token
- Get your LinkedIn User ID
- Add to `.env.local`:
  - `LINKEDIN_ACCESS_TOKEN=AQV...`
  - `LINKEDIN_USER_ID=1234567890`

**Instagram/Facebook API (Optional for auto-posting):**
- Use Facebook Graph API through Meta Business Suite
- Add to `.env.local`:
  - `INSTAGRAM_BUSINESS_ACCOUNT_ID=123456789`
  - `INSTAGRAM_ACCESS_TOKEN=IGAB...`

### 2. Add Security Key

Generate a random secure key and add to `.env.local`:
```
API_SECRET_KEY=your-super-secure-random-key
```

## Usage

### Generate Blog Post via API

```bash
curl -X POST http://localhost:3000/api/ai/generate \
  -H "Authorization: Bearer your-api-secret-key" \
  -H "Content-Type: application/json" \
  -d '{
    "topic": "SQL Performance Tuning in Louisiana",
    "keywords": ["SQL", "database", "performance"],
    "length": "medium",
    "postToSocial": true
  }'
```

### Request Parameters

- `topic` (required): Blog post topic
- `keywords` (optional): Array of keywords to include
- `length` (optional): "short" (300-400 words), "medium" (600-800), "long" (1200-1500)
- `postToSocial` (optional): Auto-post to social media (true/false)

### Response

```json
{
  "success": true,
  "blogPost": {
    "title": "Post title",
    "slug": "post-slug",
    "excerpt": "Summary",
    "content": "Full content...",
    "date": "2025-01-15",
    "author": "Folse Tech AI"
  },
  "socialPosts": {
    "twitter": "Tweet text...",
    "linkedin": "LinkedIn post...",
    "instagram": "Instagram caption..."
  }
}
```

## Workflow Example

### 1. Generate a Blog Post

```bash
curl -X POST http://localhost:3000/api/ai/generate \
  -H "Authorization: Bearer YOUR_API_SECRET_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "topic": "AI Web Design Trends 2025",
    "keywords": ["AI", "web design", "trends"],
    "length": "medium"
  }'
```

### 2. Add to Blog Posts

Manually add the returned blog post to `app/lib/posts.ts`:

```typescript
export const posts: Post[] = [
  // ... existing posts
  {
    slug: "ai-web-design-trends-2025",
    title: "AI Web Design Trends 2025",
    excerpt: "Discover the latest AI-powered design trends...",
    content: "Full content from API...",
    date: "2025-01-15",
    author: "Folse Tech AI",
  },
];
```

### 3. Auto-Post to Social Media (Optional)

```bash
curl -X POST http://localhost:3000/api/ai/generate \
  -H "Authorization: Bearer YOUR_API_SECRET_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "topic": "SQL Optimization Tips",
    "length": "short",
    "postToSocial": true
  }'
```

This will:
- Generate a blog post
- Create Twitter, LinkedIn, and Instagram posts
- Auto-post to enabled social networks

## Future Enhancements

- [ ] Automatic database saving of generated posts
- [ ] Scheduled content generation (daily/weekly)
- [ ] Image generation for social posts
- [ ] Multi-language support
- [ ] Content calendar UI
- [ ] Bulk generation API

## Troubleshooting

**"Unauthorized" error:**
- Check `API_SECRET_KEY` in `.env.local`
- Verify header: `Authorization: Bearer YOUR_KEY`

**Claude API errors:**
- Ensure `ANTHROPIC_API_KEY` is set
- Check Anthropic console for API quota/limits

**Social media posting errors:**
- Verify API tokens are valid and not expired
- Check API scopes/permissions
- Review social media API documentation

## Cost Considerations

- **Claude API**: ~$0.01-0.03 per blog post (depending on length)
- **Twitter API**: Free tier available
- **LinkedIn API**: Requires verified developer account
- **Instagram API**: Free through Meta Business Suite

Set up budgets and rate limits to control costs.
