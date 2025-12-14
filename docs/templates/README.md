# Controlled Dynamics Executive Report Template

## Overview
Professional document template for whitepapers, application notes, market reports, and technical documentation.

**Features:**
- Standard 8.5" x 11" format
- Wide left margin (1.5") for executive notes/binding
- Brand colors (Navy #0A1628, Gold #C9A227)
- Professional typography (Barlow Condensed + Inter)
- Reusable components (callouts, charts, tables, stats)
- Print-optimized with automatic page breaks

## Files Created

1. **Market_Opportunity_Report_2025.html** - Example report (fully populated)
2. **CDI_Executive_Report_Template.html** - Blank template for new documents

## How to Use This Template

### Step 1: Copy the Template
```bash
cp docs/templates/CDI_Executive_Report_Template.html docs/Your_Document_Name.html
```

### Step 2: Edit Content
Open the HTML file in any text editor and replace placeholders:
- `[DOCUMENT TITLE]` - Your document title
- `[Document Category]` - e.g., "Application Note", "Technical Whitepaper"
- `[Your content here]` - Add your text, tables, charts
- `[Month Year]` - Publication date

### Step 3: Convert to PDF

**Option A: Print from Browser (Easiest)**
1. Open the HTML file in Chrome/Safari/Firefox
2. File → Print
3. Destination: "Save as PDF"
4. Paper size: Letter (8.5" x 11")
5. Margins: Default
6. Save

**Option B: Use Command Line (Automated)**
```bash
# Install wkhtmltopdf (Mac)
brew install wkhtmltopdf

# Convert to PDF
wkhtmltopdf --page-size Letter --margin-left 1.5in --margin-right 0.75in \
  --margin-top 0.75in --margin-bottom 0.75in \
  Your_Document_Name.html Your_Document_Name.pdf
```

**Option C: Online Converter**
- Upload HTML file to: html2pdf.com or similar
- Select Letter size
- Download PDF

## Template Components

### Cover Page
```html
<div class="cover page-break">
    <div class="cover-logo">CONTROLLED DYNAMICS</div>
    <div class="cover-category">Application Note</div>
    <h1 class="cover-title">YOUR<br>TITLE<br>HERE</h1>
    <p class="cover-subtitle">Subtitle here</p>
    <!-- Stats grid -->
    <div class="cover-stats">...</div>
</div>
```

### Section Headers
```html
<h1><span class="section-number">1</span> Section Title</h1>
<h2>Subsection Title</h2>
<h3>Sub-subsection Title</h3>
```

### Statistics Grid (3 columns)
```html
<div class="stats-grid">
    <div class="stat-box">
        <div class="stat-value">$47B</div>
        <div class="stat-label">Market Size</div>
    </div>
    <!-- Repeat 2 more times -->
</div>
```

### Callout Boxes
```html
<!-- Standard callout -->
<div class="callout">
    <div class="callout-title">Important Note</div>
    <p>Content here</p>
</div>

<!-- Highlighted callout (dark background) -->
<div class="callout highlight">
    <div class="callout-title">Critical Information</div>
    <p>Content here</p>
</div>

<!-- Key findings box -->
<div class="key-findings">
    <h3>Key Points</h3>
    <ul class="checklist">
        <li>Point one</li>
        <li>Point two</li>
    </ul>
</div>
```

### Tables
```html
<table>
    <thead>
        <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Data</td>
            <td>Data</td>
            <td class="table-highlight">Highlighted cell</td>
        </tr>
    </tbody>
</table>
```

### Bar Charts
```html
<div class="chart-container">
    <h4>Chart Title</h4>
    <div class="bar-chart">
        <div class="bar">
            <div class="bar-label">Category Name</div>
            <div class="bar-fill-container">
                <div class="bar-fill" style="width: 60%;">$100M</div>
            </div>
        </div>
        <!-- Add more bars -->
    </div>
</div>
```

### Checklists (with checkmarks)
```html
<ul class="checklist">
    <li>Item with automatic checkmark</li>
    <li>Another item</li>
</ul>
```

### Page Breaks
```html
<div class="page-break">
    <!-- Content for new page -->
</div>
```

## Brand Colors

Use these CSS variables in custom elements:
- `var(--navy)` - #0A1628 (dark blue)
- `var(--navy-light)` - #1E3A5F (lighter blue)
- `var(--gold)` - #C9A227 (gold accent)
- `var(--gold-light)` - #E0B830 (lighter gold)
- `var(--gray)` - #6B7C93 (text gray)
- `var(--gray-light)` - #F4F6F8 (background gray)

## Document Types You Can Create

### Application Notes
- Technical how-to guides
- Installation instructions
- Design guidelines
- Engineering specifications

### Whitepapers
- Market analysis (like the Market Opportunity Report)
- Technology comparisons
- Industry trends
- Technical deep dives

### Case Studies
- Customer success stories
- Problem/solution narratives
- ROI demonstrations
- Before/after comparisons

### Product Sheets
- Technical specifications
- Feature comparisons
- Application guides
- Selection guides

## Tips for Best Results

1. **Keep left margin clear** - Don't add content in the wide left margin (reserved for notes)
2. **Use page breaks** - Add `<div class="page-break">` to start new pages
3. **Test print early** - Preview PDF to check formatting
4. **Optimize images** - Use web-optimized images (<200KB each)
5. **Check colors** - Print test page to verify brand colors
6. **Proofread thoroughly** - Executive documents require zero errors

## Examples of Use

### Creating a New Application Note
1. Copy template: `cp CDI_Executive_Report_Template.html Application_Note_Cleanroom_Systems.html`
2. Edit cover: Change category to "Application Note AN-001"
3. Edit title: "Cleanroom Structural Systems Design Guide"
4. Add technical content using tables, callouts, checklists
5. Convert to PDF and distribute

### Creating a Technical Comparison
1. Copy template
2. Use comparison tables extensively
3. Add bar charts for visual comparison
4. Include ROI calculations in callout boxes
5. Use highlighted callouts for key advantages

## Customization

To modify the template for special documents:
1. Colors: Edit CSS variables in `:root`
2. Fonts: Change `@import` URL and font-family declarations
3. Margins: Modify `@page` margins in CSS
4. Components: Add new CSS classes as needed

## Questions?

Contact: info@controlleddynamicsinc.com
