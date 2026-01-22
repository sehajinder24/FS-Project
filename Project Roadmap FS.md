# FS-Project
# Smart Inventory Management System

## Development Roadmap (8 Weeks)

### Tech Stack 
- **Frontend:** React
- **Backend:** Spring Boot
- **ORM:** Hibernate
- **Database:** MySQL

### Modules
- Admin Panel  
- Inventory Dashboard  
- Alerts  
- Supplier Management  

### Use Case
Automates inventory tracking and reordering processes.

### Evaluation Criteria
- Role-based views  
- Stock level indicators  
- Version control (Git)  
- API logs  

---

## Week 1 – Main Dashboard (HTML + CSS)

### Focus
Inventory Dashboard UI

### Tasks
- Design dashboard layout using HTML & CSS
- Create static pages for:
  - Inventory overview
  - Stock level indicators (Low / Normal / Out of Stock)
- Use dummy/static data
- Responsive layout planning
- Navigation bar & basic UI flow

### Deliverables
- Fully designed dashboard (HTML only)
- Visual stock indicators
- Clean UI structure

---

## Week 2 – Other UI Pages (HTML Websites)

### Focus
Complete Frontend Structure

### Tasks
- Create static HTML pages for:
  - Admin Panel
  - Supplier Management
  - Alerts page
  - Reports page
- Create common components:
  - Header
  - Sidebar
  - Footer
- Design forms:
  - Add product
  - Add supplier
  - Reorder stock

### Deliverables
- All frontend pages completed (HTML/CSS)
- Navigation between pages
- UI prototype ready (no backend)

---

## Week 3 – Database Design (MySQL)

### Focus
Data Layer

### Tasks
- Design ER diagram
- Create tables:
  - Users
  - Roles
  - Products
  - Inventory
  - Suppliers
  - Reorders
- Define relationships & constraints

### Deliverables
- MySQL database schema
- Sample records for testing
- Normalized database design

---

## Week 4 – Connect Database with Backend

### Focus
Backend & Data Integration

### Tasks
- Set up Spring Boot project
- Configure Hibernate & MySQL
- Create entities & repositories
- Connect backend with frontend (basic data fetch & display)
- Implement inventory CRUD operations

### Deliverables
- Working database–backend connection
- Inventory data displayed on dashboard
- CRUD operations functional

---

## Week 5 – Security & Role-Based Access

### Focus
Authentication & Authorization

### Tasks
- Implement Spring Security
- Configure role-based access:
  - Admin
  - Staff/User
- Restrict pages & APIs based on roles
- Implement login & logout functionality
- Secure backend endpoints

### Deliverables
- Role-based views
- Secure application
- Authorized access control

---

## Week 6 – Reordering Functionality

### Focus
Inventory Automation

### Tasks
- Set reorder threshold per product
- Detect low-stock items
- Implement reorder logic
- Create reorder request records
- Add UI button for manual reorder

### Deliverables
- Automatic reorder suggestions
- Manual reorder functionality
- Reorder data stored in database

---

## Week 7 – Reporting & Alerts

### Focus
Monitoring & Insights

### Tasks
- Generate inventory reports:
  - Stock status
  - Reorder history
- Implement alerts for:
  - Low stock
  - Out of stock
- Display alerts on dashboard
- Apply role-based access to reports

### Deliverables
- Reporting module
- Alerts system active
- Visual notifications in UI

---

## Week 8 – APIs, Logging & Final Integration

### Focus
System Completion

### Tasks
- Create REST APIs for all modules
- Implement API request/response logging
- Test APIs using Postman
- Optimize performance
- Complete UI–backend integration
- Git cleanup & documentation

### Deliverables
- API logs implemented
- Fully integrated system
- Project ready for final evaluation

---
