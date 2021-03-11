## HUMG Chatible

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

#### Chatible được viết bằng TypeScript, dựa trên Node, Express và Mongo

Demo: https://m.me/humgbotchat

## Hướng dẫn

- Deploy đến Heroku bằng cách sử dụng nút deploy .
- Tạo một cụm trên MongoDB Atlas. Địa chỉ IP danh sách trắng.
- Tạo một ứng dụng trên Facebook. Cài đặt Webhook. Tạo app secret and tokens.
- Đặt `Config Vars` của  Heroku's. Kiểm tra [Tại đây](src/config/index.ts) để biết những biến nào bạn cần đặt.
- Enjoy!

## Tính năng đặc trưng

- Admin dashboard ([SourceCode](https://github.com/adhumgchatbot/adhumgchatbot.github.io) or [SourceCode](https://github.com/adminchatbot/adminchatbot.github.io))
- Ghép cặp theo giới tính (ví dụ: nam với nữ)
- Gửi hình ảnh chó / mèo dễ thương.
- Mẫu tin nhắn có thể tùy chỉnh trong source code.
- Cơ sở dữ liệu bộ nhớ cache trong bộ nhớ để tăng hiệu suất.

## Tính năng theo kế hoạch ( Dự Kiến )

- Cho phép chỉnh sửa hồ sơ qua Messenger Webview
- Giới hạn tỷ lệ yêu cầu được gửi đi để tránh bị chuyển đổi sang trang [MPS Cao](https://developers.facebook.com/docs/messenger-platform/send-messages/high-mps) page

## Giấy phép

Dự án này được cấp phép theo Giấy phép MIT - xem tệp [LICENSE.md](LICENSE.md) để biết chi tiết


