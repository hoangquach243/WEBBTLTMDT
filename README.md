# Dự án Thương Mại Điện Tử

Dự án website thương mại điện tử được xây dựng với MERN Stack (MongoDB, Express, React, Node.js).

## Yêu cầu hệ thống

-   Node.js (v22.14.0)
-   MongoDB (v4.x hoặc cao hơn)
-   npm (v8.x hoặc cao hơn)
-   React (^19.1.0)
-   React-DOM (^19.1.0)

## Cấu trúc dự án

```
tmdt/
├── client/          # Frontend React
├── server/          # Backend Node.js/Express
```

## Cài đặt

### Cài đặt chung (macOS & Windows)

1. Clone dự án về máy:

```bash
git clone <repository-url>
cd tmdt
```

2. Cài đặt MongoDB:

    - [Hướng dẫn cài đặt MongoDB cho macOS](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/)
    - [Hướng dẫn cài đặt MongoDB cho Windows](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/)

3. **Lưu ý quan trọng về bcrypt**:
   Nếu gặp lỗi với bcrypt, hãy gỡ cài đặt và cài đặt lại:
    ```bash
    cd server
    npm uninstall bcrypt
    npm install bcrypt
    ```

### Cài đặt cho macOS

1. Cài đặt Node.js:

```bash
# Sử dụng Homebrew
brew install node

# Hoặc sử dụng nvm (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
nvm install 22.14.0
nvm use 22.14.0
```

2. Cài đặt dependencies cho server:

```bash
cd server
npm install
```

3. Cài đặt dependencies cho client:

```bash
cd ../client
npm install --legacy-peer-deps
```

### Cài đặt cho Windows

1. Cài đặt Node.js:

    - Tải và cài đặt từ [trang chủ Node.js](https://nodejs.org/)
    - Hoặc sử dụng nvm-windows:

    ```bash
    # Cài đặt nvm-windows từ https://github.com/coreybutler/nvm-windows/releases
    nvm install 22.14.0
    nvm use 22.14.0
    ```

2. Cài đặt dependencies cho server:

```bash
cd server
npm install
```

3. Cài đặt dependencies cho client:

```bash
cd ../client
npm install --legacy-peer-deps
```

## Cấu hình

### Cấu hình Server

1. Tạo file `.env` trong thư mục server:

**macOS:**

```bash
cd server
cp env-example.txt .env
```

**Windows:**

```bash
cd server
copy env-example.txt .env
```

2. Nội dung file `.env`:

```
CONNECT_DB=mongodb://localhost:27017/tmdt
CORS_CLIENT=http://localhost:3000
JWT_SECRET=quangtt
```

### Cấu hình Client

1. Kiểm tra scripts trong package.json của client:

**macOS:**
Scripts trong package.json nên có dạng:

```json
"scripts": {
  "start": "NODE_OPTIONS=--openssl-legacy-provider react-scripts start",
  "build": "NODE_OPTIONS=--openssl-legacy-provider GENERATE_SOURCEMAP=false react-scripts build",
  "test": "NODE_OPTIONS=--openssl-legacy-provider react-scripts test",
  "eject": "react-scripts eject"
}
```

**Windows:**
Scripts trong package.json nên có dạng:

```json
"scripts": {
  "start": "set NODE_OPTIONS=--openssl-legacy-provider && react-scripts start",
  "build": "set NODE_OPTIONS=--openssl-legacy-provider && set \"GENERATE_SOURCEMAP=false\" && react-scripts build",
  "test": "set NODE_OPTIONS=--openssl-legacy-provider && react-scripts test",
  "eject": "react-scripts eject"
}
```

2. Nếu cần thay đổi scripts cho phù hợp với hệ điều hành:

**macOS:**

```bash
cd client
```

Chỉnh sửa file package.json để scripts có dạng như trên cho macOS.

**Windows:**

```bash
cd client
```

Chỉnh sửa file package.json để scripts có dạng như trên cho Windows.

## Khởi tạo dữ liệu

### Tạo tài khoản Admin

```bash
cd server
node src/addAdmin.js
```

Tài khoản admin mặc định:

-   Email: admin@example.com
-   Mật khẩu: admin123

## Chạy ứng dụng

### macOS

1. Khởi động MongoDB (nếu chưa chạy):

```bash
brew services start mongodb-community
```

2. Khởi động server:

```bash
cd server
npm start
```

3. Khởi động client (mở terminal mới):

```bash
cd client
npm start
```

### Windows

1. Khởi động MongoDB (nếu chưa chạy):

```bash
# Nếu cài đặt MongoDB as a service
# MongoDB sẽ tự động chạy khi khởi động Windows

# Nếu không, chạy lệnh sau trong Command Prompt với quyền Administrator
net start MongoDB
```

2. Khởi động server:

```bash
cd server
npm start
```

3. Khởi động client (mở terminal mới):

```bash
cd client
npm start
```

## Truy cập ứng dụng

-   Frontend: http://localhost:3000
-   Backend API: http://localhost:5001

## Xử lý lỗi phổ biến

### Lỗi "digital envelope routines::unsupported"

Lỗi này xảy ra khi sử dụng Node.js phiên bản mới với React-Scripts cũ. Đã được xử lý trong file package.json của client.

Để khắc phục, hãy chỉnh sửa scripts trong file package.json của client cho phù hợp với hệ điều hành:

**macOS:**

```json
"scripts": {
  "start": "NODE_OPTIONS=--openssl-legacy-provider react-scripts start",
  "build": "NODE_OPTIONS=--openssl-legacy-provider GENERATE_SOURCEMAP=false react-scripts build",
  "test": "NODE_OPTIONS=--openssl-legacy-provider react-scripts test",
  "eject": "react-scripts eject"
}
```

**Windows:**

```json
"scripts": {
  "start": "set NODE_OPTIONS=--openssl-legacy-provider && react-scripts start",
  "build": "set NODE_OPTIONS=--openssl-legacy-provider && set \"GENERATE_SOURCEMAP=false\" && react-scripts build",
  "test": "set NODE_OPTIONS=--openssl-legacy-provider && react-scripts test",
  "eject": "react-scripts eject"
}
```

### Lỗi CORS

Nếu gặp lỗi CORS, hãy kiểm tra:

-   File `.env` trong thư mục server có đúng giá trị `CORS_CLIENT=http://localhost:3000`
-   Server đã được khởi động lại sau khi thay đổi file `.env`

### Lỗi kết nối MongoDB

Nếu không kết nối được MongoDB:

-   Kiểm tra MongoDB đã được khởi động
-   Kiểm tra chuỗi kết nối trong file `.env`

### Lỗi "No routes matched location /admin"

Nếu không thể truy cập trang admin:

-   Đảm bảo đã đăng nhập bằng tài khoản admin
-   Kiểm tra cookie Token đã được thiết lập đúng

### Lỗi với bcrypt

Nếu gặp lỗi liên quan đến bcrypt như:

```
Error: dlopen(/path/to/bcrypt_lib.node, 0x0001): tried: '/path/to/bcrypt_lib.node' (mach-o file, but is an incompatible architecture)
```

Đây là lỗi do phiên bản bcrypt không tương thích với phiên bản Node.js hoặc kiến trúc hệ thống. Để khắc phục:

1. Gỡ cài đặt bcrypt:

```bash
cd server
npm uninstall bcrypt
```

2. Cài đặt lại bcrypt:

```bash
npm install bcrypt
```

### Lỗi tương thích phiên bản

Dự án này yêu cầu các phiên bản cụ thể:

-   Node.js: v22.14.0
-   React: ^19.1.0
-   React-DOM: ^19.1.0

Nếu gặp lỗi tương thích, hãy đảm bảo bạn đang sử dụng đúng phiên bản. Với Node.js, bạn có thể sử dụng nvm:

```bash
nvm install 22.14.0
nvm use 22.14.0
```

Với React và React-DOM, hãy kiểm tra file package.json trong thư mục client và cập nhật nếu cần:

```json
"dependencies": {
  "react": "^19.1.0",
  "react-dom": "^19.1.0",
  // other dependencies
}
```

## Tác giả

-   Quách Nguyễn Hoàng

## Giấy phép
