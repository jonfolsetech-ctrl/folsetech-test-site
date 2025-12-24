# Google Analytics 4 Configuration Guide

## Setup Events as Conversions

Your Folse Tech site tracks two key lead events. Follow these steps to mark them as conversions in Google Analytics 4:

### Event 1: Phone Call (`phone_call`)

1. Go to **Google Analytics 4** → Your Property
2. Click **Admin** (gear icon) → **Conversions**
3. Click **+ New Conversion Event**
4. Enter Event Name: `phone_call`
5. Click **Create**

**When tracked:**
- User clicks the phone link in navigation
- User clicks phone link in footer
- Any `<PhoneLink />` component with GA4 enabled

**GA4 Event Details:**
- **Category:** Lead
- **Label:** Navigation Phone CTA, Footer Phone CTA, etc.

---

### Event 2: Form Submission (`form_submit`)

1. Go to **Google Analytics 4** → Your Property
2. Click **Admin** (gear icon) → **Conversions**
3. Click **+ New Conversion Event**
4. Enter Event Name: `form_submit`
5. Click **Create**

**When tracked:**
- User submits the contact form
- Any `<ContactForm />` component submission

**GA4 Event Details:**
- **Category:** Lead
- **Label:** Contact Form (customizable)

---

## Verify Events in GA4

After marking as conversions:

1. Go to **Conversions** dashboard
2. See real-time conversion data
3. Track conversion rate and sources
4. Create audiences based on converters

---

## Track in Google Ads

Once marked as conversions in GA4:

1. Link your Google Ads account to GA4
2. Go to **Ads** → **Conversion Settings**
3. Enable `phone_call` and `form_submit` conversions
4. Use for bidding and optimization

---

## Current Implementation

Your site automatically tracks:

- ✅ Phone calls via `<PhoneLink />` component
- ✅ Form submissions via `<ContactForm />` component
- ✅ Proper event categories and labels
- ✅ Ready for conversion configuration

Just follow the steps above to mark them as conversions in your GA4 property!
