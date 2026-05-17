import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Share2, Calendar, Clock } from 'lucide-react'

const blogContent = {
  'amazon-fba-complete-guide': {
    title: 'How to Sell on Amazon in 2026: Complete Beginner\'s Guide',
    date: 'May 15, 2026',
    category: 'Amazon',
    readTime: '12 min read',
    author: 'Ecom Calc Tools',
    content: `
    <h2>Getting Started with Amazon FBA</h2>
    <p>Amazon FBA (Fulfillment by Amazon) is one of the most popular ways to scale an ecommerce business. In this guide, we'll walk through everything you need to know to get started.</p>

    <h3>Step 1: Create Your Seller Account</h3>
    <p>First, you'll need to create an Amazon seller account. You can choose between Individual or Professional plans:</p>
    <ul>
      <li><strong>Individual Plan:</strong> No monthly fee, but you pay $0.99 per sale</li>
      <li><strong>Professional Plan:</strong> $39.99/month, no per-sale fee (better if selling 40+ items/month)</li>
    </ul>

    <h3>Step 2: Product Research</h3>
    <p>Finding winning products is crucial. Look for products that:</p>
    <ul>
      <li>Have decent demand (searches/month)</li>
      <li>Have manageable competition</li>
      <li>Can be sourced profitably</li>
      <li>Weigh less than 5 lbs (lower FBA fees)</li>
      <li>Don't require special handling (hazmat, oversized, etc.)</li>
    </ul>

    <h3>Step 3: FBA vs FBM Decision</h3>
    <p><strong>FBA (Fulfillment by Amazon):</strong> Amazon stores and ships your products. Best for scaling. Higher fees but handles customer service.</p>
    <p><strong>FBM (Fulfillment by Merchant):</strong> You handle storage and shipping. Lower fees but more work. Good for testing products first.</p>

    <h3>Step 4: Calculate Your Costs</h3>
    <p>Use our Amazon FBA Calculator to understand all costs:</p>
    <ul>
      <li>Referral Fee (8-45% depending on category)</li>
      <li>Fulfillment Fee ($0.50-$6.50+ per unit)</li>
      <li>Storage Fee ($0.78-$2.40 per cubic foot)</li>
      <li>Shipping to Amazon (often $0.50-$1.50 per unit)</li>
    </ul>

    <h3>Step 5: Optimize Your Listings</h3>
    <p>Great listings convert better:</p>
    <ul>
      <li>Use keyword-rich titles (but don't stuff)</li>
      <li>Professional product photos (main image is critical)</li>
      <li>Compelling bullet points (5 key benefits)</li>
      <li>Honest, detailed descriptions</li>
      <li>Gather reviews from day one</li>
    </ul>

    <h3>Key Metrics to Monitor</h3>
    <ul>
      <li>Break-even ROAS for advertising</li>
      <li>Monthly sales and profit</li>
      <li>Return rate (target: under 5%)</li>
      <li>Storage and fulfillment costs</li>
      <li>Seller rating (keep above 4.5 stars)</li>
    </ul>

    <h3>Common Mistakes to Avoid</h3>
    <ul>
      <li>Not accounting for all costs (leads to thinking you're profitable when you're not)</li>
      <li>Competing purely on price (Amazon will outbid you)</li>
      <li>Poor product photos (biggest conversion killer)</li>
      <li>Ignoring customer reviews and feedback</li>
      <li>Overstocking inventory (cash flow problem)</li>
    </ul>

    <h3>Scaling Tips for 2026</h3>
    <ul>
      <li>Start with one proven product, then expand</li>
      <li>Use Amazon Advertising (ACoS: target 25-35% initially)</li>
      <li>Build an email list of buyers for repeat purchases</li>
      <li>Monitor your competition and adjust pricing strategically</li>
      <li>Reinvest profits into inventory and marketing</li>
    </ul>
    `
  },
  'amazon-ppc-acos-guide': {
    title: 'Amazon PPC & ACOS: Complete 2026 Guide',
    date: 'May 10, 2026',
    category: 'Amazon',
    readTime: '15 min read',
    author: 'Ecom Calc Tools',
    content: `
    <h2>Master Amazon Advertising Metrics</h2>
    <p>Understanding Amazon's advertising metrics is critical to profitable selling. This guide covers ACoS, TACOS, ROAS, and how to optimize your campaigns.</p>

    <h3>What is ACoS?</h3>
    <p><strong>ACoS (Advertising Cost of Sales)</strong> = Ad Spend / Ad Revenue × 100</p>
    <p>For example: $100 ad spend / $500 revenue = 20% ACoS</p>
    <p>Lower ACoS is better. Aim for:</p>
    <ul>
      <li>New campaigns: 30-40%</li>
      <li>Mature campaigns: 15-25%</li>
      <li>Highly optimized: Under 15%</li>
    </ul>

    <h3>What is TACOS?</h3>
    <p><strong>TACOS (Total Advertising Cost of Sales)</strong> = All Ad Spend / Total Revenue × 100</p>
    <p>This includes all advertising channels (Sponsored Products, Sponsored Brands, Display Ads)</p>
    <p>Your TACOS should be under 50% of your profit margin to remain profitable.</p>

    <h3>Break-Even ACoS Calculation</h3>
    <p>Your break-even ACoS depends on your profit margin:</p>
    <ul>
      <li>50% profit margin → 50% ACoS is break-even</li>
      <li>30% profit margin → 30% ACoS is break-even</li>
      <li>15% profit margin → 15% ACoS is break-even</li>
    </ul>
    <p>Always aim for ACoS below your profit margin, ideally 50% of your profit margin.</p>

    <h3>Campaign Structure</h3>
    <p>Best practice is to organize campaigns by:</p>
    <ul>
      <li>Product (different campaigns for each SKU)</li>
      <li>Keyword type (branded, category, competitor)</li>
      <li>Match type (exact, phrase, broad)</li>
      <li>Bid strategy (different budgets for different keywords)</li>
    </ul>

    <h3>Daily Budget Allocation</h3>
    <p>Start with a daily budget you can afford to lose while testing. Examples:</p>
    <ul>
      <li>Testing phase: $5-20/day per campaign</li>
      <li>Growing campaign: $20-50/day</li>
      <li>Mature campaign: $50-200+/day</li>
    </ul>

    <h3>Bid Strategy</h3>
    <ul>
      <li>High-intent keywords (branded, product type): Bid higher</li>
      <li>Generic keywords: Bid lower initially, increase if profitable</li>
      <li>Competitor keywords: High bids but lower conversion</li>
      <li>Start at $0.50-1.00, adjust based on ACOS</li>
    </ul>

    <h3>Optimization Steps</h3>
    <ol>
      <li>Wait at least 500 impressions before evaluating performance</li>
      <li>Pause keywords with ACoS above 50%</li>
      <li>Increase bid on profitable keywords</li>
      <li>Pause underperforming product categories</li>
      <li>Test new keywords continuously</li>
      <li>Review and adjust weekly (not daily)</li>
    </ol>

    <h3>Using Our Amazon PPC Calculator</h3>
    <p>Calculate your ACOS, TACOS, RoAS and break-even metrics instantly.</p>

    <h3>Common Mistakes</h3>
    <ul>
      <li>Not accounting for platform fees in ACoS calculation</li>
      <li>Running too many campaigns with spread budgets</li>
      <li>Bidding too high on unproven keywords</li>
      <li>Not adjusting for seasonality</li>
      <li>Ignoring search term reports</li>
    </ul>
    `
  },
  'paypal-business-fees': {
    title: 'PayPal Business Fees 2026: Full Pricing Guide',
    date: 'May 8, 2026',
    category: 'Payments',
    readTime: '8 min read',
    author: 'Ecom Calc Tools',
    content: `
    <h2>PayPal Business Fees Explained</h2>
    <p>PayPal is one of the most popular payment processors for ecommerce. Understanding the fees is critical to calculating true profitability.</p>

    <h3>Standard PayPal Fees (2026)</h3>
    <ul>
      <li><strong>Domestic transactions:</strong> 3.49% + $0.49</li>
      <li><strong>International transactions:</strong> 3.49% + $0.49 + currency conversion (1-3%)</li>
      <li><strong>Withdrawal fee to bank:</strong> Usually free</li>
      <li><strong>Chargeback fee:</strong> $20.95</li>
    </ul>

    <h3>Example Calculation</h3>
    <p>For a $100 sale:</p>
    <ul>
      <li>Fee: (100 × 0.0349) + 0.49 = $3.99</li>
      <li>Net received: $96.01</li>
    </ul>

    <h3>PayPal for Marketplaces</h3>
    <p>If you're using PayPal as a marketplace payment processor, additional fees may apply for seller payouts.</p>

    <h3>How to Reduce PayPal Fees</h3>
    <ul>
      <li>Use PayPal Checkout on your Shopify store (embedded payment)</li>
      <li>Negotiate higher volume discounts (call PayPal directly)</li>
      <li>Consider alternative processors like Stripe for lower rates</li>
      <li>Combine with other payment methods to diversify</li>
    </ul>

    <h3>PayPal vs Stripe Comparison</h3>
    <p>Stripe is often cheaper for ecommerce:</p>
    <ul>
      <li><strong>Stripe:</strong> 2.9% + $0.30</li>
      <li><strong>PayPal:</strong> 3.49% + $0.49</li>
      <li>On a $100 sale: Stripe costs $3.20 vs PayPal $3.99</li>
    </ul>

    <h3>Payment Holds and Disputes</h3>
    <p>PayPal may hold funds for up to 21 days if:</p>
    <ul>
      <li>You're a new seller</li>
      <li>There's unusual account activity</li>
      <li>Chargeback rates are high</li>
    </ul>
    <p>Minimize this with good customer service and product reviews.</p>
    `
  },
  'ecommerce-profit-margins': {
    title: 'What Is a Good Profit Margin for Ecommerce?',
    date: 'May 5, 2026',
    category: 'Finance',
    readTime: '10 min read',
    author: 'Ecom Calc Tools',
    content: `
    <h2>Understanding Ecommerce Profit Margins</h2>
    <p>Profit margin is the percentage of revenue that remains as profit after all expenses. It's the most important metric for ecommerce businesses.</p>

    <h3>Types of Margins</h3>
    <ul>
      <li><strong>Gross Margin:</strong> Revenue minus COGS. Shows production efficiency.</li>
      <li><strong>Operating Margin:</strong> After operating expenses (salaries, rent, marketing).</li>
      <li><strong>Net Margin:</strong> Final profit after all expenses and taxes.</li>
    </ul>

    <h3>Industry Benchmarks (2026)</h3>
    <ul>
      <li><strong>Apparel:</strong> Gross 50-60%, Net 10-15%</li>
      <li><strong>Electronics:</strong> Gross 20-35%, Net 5-10%</li>
      <li><strong>Beauty:</strong> Gross 65-75%, Net 15-25%</li>
      <li><strong>Home & Garden:</strong> Gross 40-55%, Net 8-15%</li>
      <li><strong>Books/Media:</strong> Gross 35-45%, Net 5-12%</li>
    </ul>

    <h3>Healthy Margin Targets</h3>
    <ul>
      <li><strong>Minimum viable:</strong> 20% gross margin</li>
      <li><strong>Target:</strong> 40-50% gross margin</li>
      <li><strong>Excellent:</strong> 60%+ gross margin</li>
    </ul>
    <p>For net margin, aim for 10-20% if scaling sustainably.</p>

    <h3>Improving Your Margins</h3>
    <ol>
      <li><strong>Increase price:</strong> Test higher price points</li>
      <li><strong>Lower COGS:</strong> Find cheaper suppliers</li>
      <li><strong>Reduce waste:</strong> Optimize inventory</li>
      <li><strong>Negotiate fees:</strong> Lower payment processing costs</li>
      <li><strong>Improve efficiency:</strong> Reduce labor and operational costs</li>
      <li><strong>Premium positioning:</strong> Sell higher-quality for more</li>
    </ol>

    <h3>Margin Killers in Ecommerce</h3>
    <ul>
      <li>High return rates (8-15% typical, aim for under 5%)</li>
      <li>Ad spend without optimization (most common)</li>
      <li>Platform fees (15% on Amazon, 6.5% on Etsy, 13.25% on eBay)</li>
      <li>Payment processing fees (3-5% typically)</li>
      <li>Unnecessary app subscriptions</li>
      <li>Poor inventory management (deadstock)</li>
    </ul>

    <h3>Use Our Calculator</h3>
    <p>Calculate your exact margins with our Profit Margin Calculator tool.</p>
    `
  },
  'stripe-vs-paypal': {
    title: 'Stripe vs PayPal Fees 2026: Which Saves More?',
    date: 'May 1, 2026',
    category: 'Payments',
    readTime: '7 min read',
    author: 'Ecom Calc Tools',
    content: `
    <h2>Stripe vs PayPal: Complete Comparison</h2>
    <p>Both are popular payment processors, but they have different fee structures. Let's break down which is cheaper for your business.</p>

    <h3>Fee Comparison</h3>
    <table>
      <tr><th>Metric</th><th>Stripe</th><th>PayPal</th></tr>
      <tr><td>Domestic Rate</td><td>2.9% + $0.30</td><td>3.49% + $0.49</td></tr>
      <tr><td>International</td><td>2.9% + $0.30 + 1%</td><td>3.49% + $0.49 + 1-3%</td></tr>
      <tr><td>Subscription Fee</td><td>Free</td><td>Free</td></tr>
      <tr><td>Chargeback</td><td>$15</td><td>$20.95</td></tr>
    </table>

    <h3>Savings Example</h3>
    <p>On $10,000 monthly revenue:</p>
    <ul>
      <li><strong>Stripe:</strong> $10,000 × 0.029 + ($10,000 ÷ 100 × 0.30) = $290 + $30 = $320</li>
      <li><strong>PayPal:</strong> $10,000 × 0.0349 + ($10,000 ÷ 100 × 0.49) = $349 + $49 = $398</li>
      <li><strong>Savings with Stripe:</strong> $78/month = $936/year</li>
    </ul>

    <h3>Key Differences</h3>
    <ul>
      <li><strong>Stripe:</strong> Modern, developer-friendly, better for high volume</li>
      <li><strong>PayPal:</strong> Established trust, but older interface</li>
    </ul>

    <h3>Which Should You Choose?</h3>
    <ul>
      <li><strong>Choose Stripe if:</strong> High volume, international sales, custom checkout</li>
      <li><strong>Choose PayPal if:</strong> Established brand trust, lower tech needs</li>
      <li><strong>Best strategy:</strong> Offer both (customers have choice)</li>
    </ul>

    <h3>Pro Tips</h3>
    <ul>
      <li>Negotiate rates after 6-12 months of volume</li>
      <li>Offer both payment methods for maximum conversions</li>
      <li>Use Stripe for Shopify (integrated)</li>
      <li>Monitor chargeback rates (high rates = higher fees)</li>
    </ul>
    `
  },
  'tiktok-shop-guide': {
    title: 'TikTok Shop Seller Fees 2026: Complete Guide',
    date: 'April 28, 2026',
    category: 'TikTok Shop',
    readTime: '9 min read',
    author: 'Ecom Calc Tools',
    content: `
    <h2>TikTok Shop: The New Ecommerce Frontier</h2>
    <p>TikTok Shop is rapidly becoming a major platform for ecommerce sellers. Here's everything you need to know about fees and profitability.</p>

    <h3>TikTok Shop Fee Structure (2026)</h3>
    <ul>
      <li><strong>Seller Commission:</strong> 2-8% depending on category</li>
      <li><strong>Payment Processing Fee:</strong> 3.5% + $0.30</li>
      <li><strong>Creator Commission (if using):</strong> 15% (optional)</li>
    </ul>

    <h3>Category Commission Rates</h3>
    <ul>
      <li>Clothing & Accessories: 5%</li>
      <li>Beauty & Personal Care: 5%</li>
      <li>Electronics: 8%</li>
      <li>Home & Garden: 5%</li>
      <li>General Products: 5%</li>
    </ul>

    <h3>Why TikTok Shop is Competitive</h3>
    <p>Compared to eBay (13.25%) and Etsy (6.5%), TikTok Shop fees are very low:</p>
    <ul>
      <li><strong>TikTok Shop:</strong> ~8-10% total</li>
      <li><strong>eBay:</strong> 13-15% total</li>
      <li><strong>Etsy:</strong> 10-11% total</li>
    </ul>

    <h3>Growth in 2026</h3>
    <ul>
      <li>Fastest growing ecommerce platform</li>
      <li>Access to billions of TikTok users</li>
      <li>Great for viral marketing</li>
      <li>Lower fees attract sellers</li>
    </ul>

    <h3>Getting Started</h3>
    <ol>
      <li>Create a TikTok business account</li>
      <li>Apply for TikTok Shop seller program</li>
      <li>Set up products and inventory</li>
      <li>Create engaging short-form videos</li>
      <li>Use creator collaborations (15% commission)</li>
    </ol>

    <h3>Pro Strategy: Creator Collaborations</h3>
    <p>Partner with TikTok creators to promote products directly in their videos. While it costs 15% commission, the viral reach can be worth it.</p>

    <h3>Use Our Calculator</h3>
    <p>Calculate TikTok Shop fees and profitability with our TikTok Shop Fee Calculator.</p>
    `
  },
  'ebay-selling-guide': {
    title: 'How to Sell on eBay in 2026: Complete Beginner\'s Guide',
    date: 'April 25, 2026',
    category: 'eBay',
    readTime: '13 min read',
    author: 'Ecom Calc Tools',
    content: `
    <h2>Complete Guide to Selling on eBay</h2>
    <p>eBay is one of the oldest and still one of the largest ecommerce marketplaces. Here's how to start and scale your eBay business.</p>

    <h3>Account Types</h3>
    <ul>
      <li><strong>Personal Account:</strong> Limited, no business identity</li>
      <li><strong>Business Account:</strong> Unlimited listings, better for resellers</li>
    </ul>

    <h3>Fee Structure (2026)</h3>
    <ul>
      <li><strong>Insertion Fee:</strong> Free to $2.00 per listing</li>
      <li><strong>Final Value Fee:</strong> 12.9-14.5% by category (usually 13.25%)</li>
      <li><strong>Payment Processing:</strong> Included in managed payments</li>
      <li><strong>Shipping Label Discount:</strong> 5-10% savings vs retail</li>
    </ul>

    <h3>Product Categories with Lower Fees</h3>
    <ul>
      <li>Books: 9% FVF</li>
      <li>Media: 9% FVF</li>
      <li>Most other categories: 13.25% FVF</li>
    </ul>

    <h3>Listing Optimization Tips</h3>
    <ul>
      <li>Use all 12 picture slots (primary image is critical)</li>
      <li>Write detailed titles with keywords</li>
      <li>Complete all item specs</li>
      <li>Honest condition descriptions</li>
      <li>Quick handling time (1 business day is best)</li>
      <li>Offer free or cheap shipping (build into price)</li>
    </ul>

    <h3>Shipping Strategy</h3>
    <ul>
      <li><strong>USPS:</strong> Cheapest for small packages</li>
      <li><strong>UPS/FedEx:</strong> Better for heavier items</li>
      <li><strong>Calculated Shipping:</strong> Let buyer pay based on their location</li>
      <li><strong>Free Shipping Trick:</strong> Include shipping in your price</li>
    </ul>

    <h3>Building Seller Rating</h3>
    <ul>
      <li>Maintain 4.8+ stars (critical for success)</li>
      <li>Ship fast (communicate tracking immediately)</li>
      <li>Pack well (reduce damage)</li>
      <li>Respond to messages within 24 hours</li>
      <li>Handle returns professionally</li>
    </ul>

    <h3>Scaling Your eBay Business</h3>
    <ol>
      <li>Find a profitable niche with proven demand</li>
      <li>Build inventory with multiple SKUs</li>
      <li>Automate with tools like eBay Seller Center</li>
      <li>Invest in product photography</li>
      <li>Test pricing strategies</li>
      <li>Use eBay Promotions to boost sales</li>
    </ol>

    <h3>Common Mistakes</h3>
    <ul>
      <li>Poor product photos</li>
      <li>Vague descriptions (leads to returns)</li>
      <li>Slow shipping</li>
      <li>High shipping costs (buyers see final price)</li>
      <li>Not responding to inquiries</li>
      <li>Competing only on price</li>
    </ul>

    <h3>eBay vs Amazon vs Shopify</h3>
    <ul>
      <li><strong>eBay:</strong> Best for used, vintage, bulk items</li>
      <li><strong>Amazon:</strong> Best for new products with FBA</li>
      <li><strong>Shopify:</strong> Best for branded, custom products</li>
    </ul>
    `
  },
  'shopify-profit-margins': {
    title: 'Shopify Profit Margins: How Much Are You Really Making?',
    date: 'April 22, 2026',
    category: 'Shopify',
    readTime: '11 min read',
    author: 'Ecom Calc Tools',
    content: `
    <h2>Calculate Your True Shopify Profitability</h2>
    <p>Many Shopify store owners are surprised to discover they're making much less (or even losing money) than they thought. Let's fix that.</p>

    <h3>Hidden Costs Killing Your Margins</h3>
    <ul>
      <li><strong>Shopify Plan:</strong> $29-2,299/month</li>
      <li><strong>Payment Processing:</strong> 2.9% + $0.30</li>
      <li><strong>App Subscriptions:</strong> Often $100-300/month</li>
      <li><strong>Shipping:</strong> Usually $3-15 per order</li>
      <li><strong>Returns:</strong> 5-15% of orders</li>
      <li><strong>Ad Spend:</strong> To get traffic</li>
    </ul>

    <h3>Example: $5,000 Monthly Revenue Store</h3>
    <ul>
      <li>COGS: $1,500 (30%)</li>
      <li>Shopify Basic: $29</li>
      <li>Payment Fee (2.9% + $0.30): $175</li>
      <li>Apps: $150</li>
      <li>Shipping: $400</li>
      <li>Returns (10%): $500</li>
      <li>Ad Spend: $500</li>
    </ul>
    <p><strong>Total Costs: $3,254</strong></p>
    <p><strong>Net Profit: $1,746 (35%)</strong></p>
    <p>Most store owners would guess 50%+ profit!</p>

    <h3>How to Improve Shopify Margins</h3>
    <ol>
      <li><strong>Reduce COGS:</strong> Find cheaper suppliers</li>
      <li><strong>Audit App Subscriptions:</strong> Delete unused apps</li>
      <li><strong>Optimize Ad Spend:</strong> Only scale profitable campaigns</li>
      <li><strong>Reduce Returns:</strong> Better product photos, descriptions</li>
      <li><strong>Negotiate Shipping:</strong> Use Shopify Shipping for discounts</li>
      <li><strong>Increase Price:</strong> Test higher price points</li>
    </ol>

    <h3>Shopify Plan Comparison</h3>
    <ul>
      <li><strong>Basic ($29):</strong> 100-500 orders/month. Best starting out.</li>
      <li><strong>Shopify ($299):</strong> 500-5,000 orders/month. Lower percentages.</li>
      <li><strong>Advanced ($2,299):</strong> 5,000+ orders/month. Lowest rates.</li>
    </ul>

    <h3>Healthy Shopify Store Benchmarks</h3>
    <ul>
      <li>Gross Margin (after COGS): 60-70%</li>
      <li>Operating Margin (after fees/apps): 40-50%</li>
      <li>Net Profit (after everything): 15-25%</li>
    </ul>

    <h3>Red Flags Your Margins Are Too Low</h3>
    <ul>
      <li>COGS over 40% of revenue</li>
      <li>Losing money at current revenue level</li>
      <li>Ad ROAS below 3:1</li>
      <li>Return rate above 10%</li>
      <li>Monthly app costs above 10% of revenue</li>
    </ul>

    <h3>Use Our Calculator</h3>
    <p>Calculate exact Shopify profitability with all hidden costs included.</p>
    `
  }
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = blogContent[slug]

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Link to="/blog" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 mb-8">
            <ArrowLeft size={18} className="mr-2" />
            Back to Blog
          </Link>
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Post Not Found</h1>
            <p className="text-gray-600 mb-6">The blog post you're looking for doesn't exist.</p>
            <Link to="/blog" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700">
              Return to Blog
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Link to="/blog" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 mb-8">
          <ArrowLeft size={18} className="mr-2" />
          Back to Blog
        </Link>

        <article className="bg-white rounded-lg shadow-lg p-8">
          <div className="mb-6">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full mb-4">
              {post.category}
            </span>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
            <div className="flex flex-col sm:flex-row gap-4 text-gray-600 text-sm">
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                {post.date}
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-2" />
                {post.readTime}
              </div>
              <div>By {post.author}</div>
            </div>
          </div>

          <div className="border-t-2 border-gray-200 pt-8 mb-8">
            <div
              className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          <div className="border-t-2 border-gray-200 pt-8 mt-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Share this article</h3>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition font-semibold">
                <Share2 size={18} />
                Share
              </button>
            </div>
          </div>
        </article>

        <div className="mt-12 p-8 bg-blue-50 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Related Calculators</h3>
          <p className="text-gray-600 mb-6">Use our free calculators to analyze your business metrics:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link to="/calculators" className="bg-white p-4 rounded-lg border border-blue-200 hover:border-blue-500 transition font-semibold text-blue-600">
              Explore All Calculators →
            </Link>
            <Link to="/calculator/profit-margin" className="bg-white p-4 rounded-lg border border-blue-200 hover:border-blue-500 transition font-semibold text-blue-600">
              Profit Margin Calculator →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
