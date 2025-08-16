# 🎬 Mavie Website

Mavie is a web application built with the **Laravel Framework**.  
The project was originally developed using **Laravel 9**, then manually upgraded to **Laravel 12** to take advantage of the latest features and security updates.  
It is containerized with **Docker** for easier deployment and uses **Laravel Octane** with **FrankenPHP** to achieve higher performance and faster response times.

---

## 🚀 Key Features
- Built with **Laravel 12** (upgraded from Laravel 9).  
- Fully containerized with **Docker** for portability and deployment.  
- Optimized performance using **Laravel Octane** + **FrankenPHP**.  
- Modular structure for easier maintenance and further development.  
- Environment-based configuration using `.env`.

---

## 📦 How to Run

Make sure you have installed:
- [Docker](https://www.docker.com/)  
- [Docker Compose](https://docs.docker.com/compose/)  

Then, from the project root, run:

```bash
docker compose up -d --build
```

This command will:
1. Build the latest Docker images for the application.  
2. Run the containers in the background (`-d`).  
3. Use the included `docker-compose.yml` configuration.  

Once the process is complete, the application will be accessible at:

```
http://localhost:8000
```

*(or another port if configured differently in `docker-compose.yml`)*

---

## ⚡ Technologies Used
- **Laravel 12** (PHP Framework)  
- **Docker & Docker Compose**  
- **Laravel Octane** (for high-performance server execution)  
- **FrankenPHP** (modern PHP server with HTTP/2 & async support)

---

## 🛠️ Local Development (without Docker)

If you prefer to run the application locally without Docker:

1. Install dependencies via Composer:
   ```bash
   composer install
   ```
2. Copy `.env.example` to `.env` and adjust configurations.  
3. Generate the application key:
   ```bash
   php artisan key:generate
   ```
4. Run the development server:
   ```bash
   php artisan serve
   ```
