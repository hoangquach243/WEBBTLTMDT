# Vấn đề với ứng dụng client

## Vấn đề chính

Ứng dụng client đang gặp một số vấn đề về tương thích:

1. **Lỗi OpenSSL**: Khi chạy ứng dụng với Node.js v22.14.0, xuất hiện lỗi `error:0308010C:digital envelope routines::unsupported`. Đây là do Node.js phiên bản mới không còn hỗ trợ một số thuật toán mã hóa cũ mà webpack trong React Scripts 3.0.1 sử dụng.

2. **Lỗi React**: Các tệp JSX gặp lỗi `'React' must be in scope when using JSX` do phiên bản React 19.1.0 yêu cầu import React rõ ràng trong mỗi tệp sử dụng JSX, trong khi React Scripts 3.0.1 không hỗ trợ đầy đủ cho phiên bản React này.

3. **Xung đột phụ thuộc**: Có các xung đột giữa các phụ thuộc trong dự án, đặc biệt là giữa chart.js và react-chartjs-2.

## Cách giải quyết

1. **Cho OpenSSL**: Thiết lập biến môi trường `NODE_OPTIONS=--openssl-legacy-provider` để cho phép sử dụng các thuật toán mã hóa cũ.

2. **Cho React**: Có hai cách:

    - Thêm `import React from 'react'` vào mỗi tệp JSX (như đã làm với Main.js)
    - Hạ cấp xuống React 18.2.0 (đang được thực hiện)

3. **Script đã cập nhật**: Đã cập nhật các script trong package.json để sử dụng cross-env, giúp thiết lập biến môi trường hoạt động trên cả Windows và macOS.

## Cài đặt bổ sung

```bash
# Cài đặt cross-env để thiết lập biến môi trường đa nền tảng
npm install cross-env --save-dev --legacy-peer-deps

# Nếu cần, cài đặt React 18.2.0
npm install react@18.2.0 react-dom@18.2.0 --legacy-peer-deps
```

## Lưu ý quan trọng

-   Sử dụng `--legacy-peer-deps` khi cài đặt các gói để tránh xung đột phụ thuộc
-   Đảm bảo các tệp JSX có dòng `import React from 'react'` ở đầu tệp
-   Nếu tiếp tục gặp lỗi, có thể cần cập nhật react-scripts lên phiên bản mới hơn

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
