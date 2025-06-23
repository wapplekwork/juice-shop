# Playwright Automation Project (TypeScript)

## Project Structure

- `src/pages/` : Page Object Models (POM) and locators
- `src/data/` : Test data files (YAML)
- `src/utils/` : Common utilities (e.g., config reader)
- `tests/` : Test cases
- `.github/` : workflow instructions

## Installation

1. ติดตั้ง Node.js (แนะนำ v18+)
2. ติดตั้ง dependencies:
   ```sh
   npm install
   ```
3. ติดตั้ง Playwright browsers:
   ```sh
   npx playwright install
   ```

## การใช้งาน

- รัน test ทั้งหมด:
  ```sh
  npx playwright test
  ```
- รัน test แบบ UI interactive:
  ```sh
  npx playwright test --ui
  ```
- รัน test เฉพาะไฟล์:
  ```sh
  npx playwright test tests/juiceShop.spec.ts
  npx playwright test tests/createNewAccount.spec.ts   
  ```

## การเพิ่ม Test Case
- สร้างไฟล์ใหม่ในโฟลเดอร์ `tests/`
- ดึง test data จาก `src/data/test-data.yml` ผ่าน `ConfigReader`

## การแยก Locator และ Test Data
- Locator และฟังก์ชันของแต่ละหน้าอยู่ใน `src/page_locator/`
- Test data อยู่ใน `src/data/test-data.yml`

## Common Features
- ฟีเจอร์ที่ใช้ร่วมกัน เช่น config reader, common functions ให้วางใน `src/utils/`

## สร้าง HTML Report
npx playwright test --reporter=html
npx playwright show-report reports/html-report

## Install Docker - use Docker Container
Run docker pull bkimminich/juice-shop
Run docker run --rm -p 127.0.0.1:3000:3000 bkimminich/juice-shop
Browse to http://localhost:3000 (on macOS and Windows browse to http://192.168.99.100:3000 if you are using docker-machine instead of the native docker installation)

---

