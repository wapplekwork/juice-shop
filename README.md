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
  npx playwright test tests/juice-shop.spec.ts
  ```

## การเพิ่ม Test Case
- สร้างไฟล์ใหม่ในโฟลเดอร์ `tests/`
- ใช้ Page Object จาก `src/pages/`
- ดึง test data จาก `src/data/test-data.yml` ผ่าน `ConfigReader`

## การแยก Locator และ Test Data
- Locator และฟังก์ชันของแต่ละหน้าอยู่ใน `src/page_locator/`
- Test data อยู่ใน `src/data/test-data.yml`

## Common Features
- ฟีเจอร์ที่ใช้ร่วมกัน เช่น config reader, helper functions ให้วางใน `src/utils/`
---

