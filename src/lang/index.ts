export default {
  MAINTENANCE: '[HUMG-Chatbot] Server hiện đang bảo trì. Đội ngũ Admin sẽ sớm kết nối lại và thông báo cho các bạn....',

  FIRST_COME: '[HUMG-Chatbot] Chào mừng bạn đến với hồ câu cá HUMG-Chatbot 😀. Trước khi bắt đầu, hãy chắc chắn rằng bạn đã chọn đúng giới tính người muốn thả thính. Ấn trợ giúp (hoặc gửi #trogiup) để xem thêm.',

  INSTRUCTION: '[HUMG-Chatbot] Gửi @start hoặc bấm vào nút để rải thính tìm cá \n Gõ #trogiup hoặc ấn nút để xem thêm',

  HELP_TXT: '[HUMG-Chatbot] Danh sách các lệnh:\n' +
            '- @start: Bắt đầu thả thính tìm Cá\n' +
            '- #pp: Kết thúc thả thính\n' +
            '- #trogiup: Xem trợ giúp\n' +
            '- #meow: Gửi ảnh mèo 🐹\n' +
            '- #cunw: Gửi ảnh cún 🐶 \n' +
            'Các lệnh có thể dùng khi đang không chat:\n' +
            '- #tim nu: Tìm cá nữ \n' +
            '- #tim nam: Tìm cá nam \n' +
            '- #tim namnu: Tìm cá giới tính bất kì thả thính\n' +
            '#Lưu ý: khi đã chọn giới tính phải #pp mới đổi được giới tính khác ',


  START_OKAY: '[Hãng hàng không HUMG Chatbot xin thông báo] Thính của quý khách đang nằm trên chuyến bay mang nhãn hiệu MH370 =))) Đang được rải đi khắp muôn nơi. Quý khách vui lòng chờ trong giây lát, thính sắp hạ cánh an toàn 🙆‍♂️❤',
  START_WARN_GENDER: '[HUMG-Chatbot] Lưu ý : Bạn không chọn giới tính. Có thể bạn sẽ phải đợi lâu hơn.',
  START_ERR_ALREADY: '[HUMG-Chatbot] Bạn không thể @start khi chưa #pp 😦...',

  WAITING: '[HUMG-Chatbot] Thính vẫn đang tiếp tục rải để tìm người phù hợp với bạn nhất =)) ... *: Nếu bạn muốn đổi giới tính, gửi #pp sau đó chọn giới tính mới.',
  CONNECTED: '[Hãng hàng không HUMG Chatbot]/n🆗Xin thông báo, thính của quý khách đã Hạ Cánh tại sân bay mang nhãn hiệu ID ✅: ',
  //CONNECTED: '[HUMG-Chatbot] Cá đớp thính! \nGiật cần đi bạn....\nNếu muốn kết thúc, hãy gửi #pp\nChúc 2 bạn nói chuyện vui vẻ <3.',
  //CONNECT_ID: '[HUMG-Chatbot] ID của cá là : ',
  CONNECT_NOTE: 'Hãy nhớ ID trên vì có thể bạn sẽ cần liên hệ với Admin để có thể lấy Infor, Report hoặc mục đích nào đó của "Cá".❤ \nChú ý: ID trên k phải là ID của Facebook mà là ID của riêng HUMG Chatbot để dùng khi cần.😆',

  END_CHAT: '[Hãng hàng không Quốc Tế HUMG Chatbot] Xin thông báo ! Hiện tại thính của quý khách đã hết lượt bay. Xin quý khách vui lòng nhấn "Bắt đầu" hoặc @start để chuyến bay được tiếp tục ❤',
  END_CHAT_PARTNER: '[HUMG-Chatbot] Bạn ý đã ngắt kết nối :(\nGửi @start hoặc bấm vào nút để tìm cá <3.',
  END_CHAT_FORCE: '[HUMG-Chatbot] Hiện tại không có cá nào đang online cả. Bạn hãy thử lại sau nhé :(',

  ERR_ATTACHMENT: '[HUMG-Chatbot] Lỗi: Humgchatbot chưa hỗ trợ gửi dạng dữ liệu này',
  ATTACHMENT_LINK: '[HUMG-Chatbot] Cá đã gửi 1 đường link: ',

  GENDER_ERR: '[HUMG-Chatbot]⚠Lỗi: Giới tính nhập vào không hợp lệ!\n\nẤn trợ giúp (hoặc gửi #trogiup) để xem thêm.',
  GENDER_WRITE_OK: '[HUMG-Chatbot] Bạn đã chọn giới tính mong muốn tìm được là: ',
  GENDER_WRITE_WARN: '\n\nLưu ý: Tùy chọn này chỉ có tác dụng với PHẦN LỚN các cuộc thả thính.\n🔄Nếu muốn chuyển giới tính thả thính mời bạn gửi #pp rồi tiếp tục.<3',
  GENDER_ARR_UNKNOWN: 'Cả Hai',
  GENDER_ARR_MALE: 'Nam🙆‍♂️',
  GENDER_ARR_FEMALE: 'Nữ🙆‍♀️',

  KEYWORD_START: '@start',
  KEYWORD_END: '#pp',
  KEYWORD_GENDER: '#tim',
  KEYWORD_GENDER_MALE: 'nam',
  KEYWORD_GENDER_FEMALE: 'nu',
  KEYWORD_GENDER_BOTH: 'namnu',
  KEYWORD_HELP: '#trogiup',
  KEYWORD_CAT: '#meow',
  KEYWORD_DOG: '#cunw',

  ERR_FAKE_MSG: '[HUMG-Chatbot] Lỗi: Bạn không được giả mạo tin nhắn của bot!',
  ERR_DATABASE: '[HUMG-Chatbot] Lỗi: Không thể kết nối với database. Hãy báo cho Admin!',
  ERR_TOO_LONG: '[HUMG-Chatbot] Lỗi: Tin nhắn quá dài (nhiều hơn 2000 ký tự). Hãy chia nhỏ tin nhắn và gửi dần.',
  ERR_200: '[HUMG-ChatbotT] Cá không thể nhận tin nhắn do đã xóa inbox hoặc block page.',
  ERR_10: '[HUMG-Chatbot] Cá không thể nhận tin nhắn do 2 bạn không nói chuyện gì trong vòng 24h. Gửi #pp để kết thúc thả thính.',
  ERR_SERVER: '[HUMG-Chatbot] Có lỗi xảy ra với chatbot. Tin nhắn của bạn chưa được xử lý. Bạn hãy thử lại sau 1 phút nữa nhé.',
  ERR_UNKNOWN: '[HUMG-Chatbot] Server xảy ra lỗi nhưng không nghiêm trọng lắm\nHãy gửi #pp để thoát ra và thử lại',
};
