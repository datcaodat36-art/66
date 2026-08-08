// =======================================
// DU LIEU SONG NGU: KIEN THUC AI
// =======================================
const aiKnowledge = [
  {
    icon: "🤖",
    name: {
      vi: "AI là gì?",
      en: "What is AI?"
    },
    content: {
      vi: "AI, hay trí tuệ nhân tạo, là công nghệ giúp máy tính học hỏi, phân tích dữ liệu và thực hiện các nhiệm vụ thường cần đến trí thông minh của con người. AI có thể trả lời câu hỏi, nhận diện hình ảnh, dịch ngôn ngữ, hỗ trợ lập trình và xử lý nhiều công việc một cách nhanh chóng.",
      en: "AI, or artificial intelligence, is a technology that helps computers learn, analyze data, and perform tasks that normally require human intelligence. It can answer questions, recognize images, translate languages, support coding, and handle many tasks efficiently."
    }
  },
  {
    icon: "🧩",
    name: {
      vi: "Ứng dụng của AI",
      en: "Applications of AI"
    },
    content: {
      vi: "Ngày nay, AI được ứng dụng trong nhiều lĩnh vực như giáo dục, y tế, kinh doanh, thiết kế, lập trình và giải trí. Các công cụ AI có thể hỗ trợ viết nội dung, tạo hình ảnh, phân tích dữ liệu, dịch thuật, lập trình và tự động hóa quy trình để tiết kiệm thời gian và nâng cao hiệu quả làm việc.",
      en: "Today, AI is used across education, healthcare, business, design, software development, and entertainment. AI tools can help with writing, image creation, data analysis, translation, coding, and process automation to save time and improve productivity."
    }
  },
  {
    icon: "💡",
    name: {
      vi: "Lợi ích của AI",
      en: "Benefits of AI"
    },
    content: {
      vi: "AI giúp con người hoàn thành công việc nhanh hơn, giảm thời gian xử lý các tác vụ lặp lại và hỗ trợ sáng tạo trong học tập cũng như công việc. Ngoài ra, AI còn có khả năng phân tích lượng dữ liệu lớn để đưa ra những gợi ý hữu ích, từ đó nâng cao năng suất và chất lượng công việc.",
      en: "AI helps people finish work faster, reduce time spent on repetitive tasks, and support creativity in learning and daily work. It can also analyze large amounts of data to generate useful suggestions that improve quality and productivity."
    }
  },
  {
    icon: "⚠️",
    name: {
      vi: "Hạn chế của AI",
      en: "Limitations of AI"
    },
    content: {
      vi: "Mặc dù rất hữu ích, AI không phải lúc nào cũng đưa ra thông tin chính xác. Kết quả do AI tạo ra có thể chứa sai sót hoặc chưa phù hợp với từng tình huống cụ thể. Vì vậy, người dùng nên kiểm tra và xác minh thông tin trước khi sử dụng trong các quyết định quan trọng.",
      en: "Although AI is very useful, it does not always produce perfectly accurate information. Its output may contain mistakes or may not fit every specific situation. That is why users should review and verify AI-generated content before using it in important decisions."
    }
  }
];

// Bổ sung để danh mục có đúng 100 công cụ. Mỗi mục dùng trang chính thức và
// được xếp điểm tham khảo theo chất lượng, mức độ phổ biến và tính ứng dụng.
const additionalAiTools = [
  [52, "Leonardo AI", "image", "🎨", "leonardo", "Tạo ảnh AI linh hoạt với nhiều model và công cụ chỉnh sửa.", "Flexible AI image creation with multiple models and editing tools.", "free", 4.6, "https://leonardo.ai", true],
  [53, "Recraft", "image", "🖍️", "recraft", "Tạo hình minh hoạ, icon và đồ hoạ vector bằng AI.", "AI creation for illustrations, icons, and vector graphics.", "free", 4.6, "https://www.recraft.ai", true],
  [54, "Krea AI", "image", "✨", "krea", "Tạo và nâng cấp hình ảnh AI theo thời gian thực.", "Real-time AI image generation and enhancement.", "free", 4.5, "https://www.krea.ai", false],
  [55, "PhotoRoom", "image", "📷", "photoroom", "Xoá nền và tạo ảnh sản phẩm nhanh bằng AI.", "AI product-photo creation and background removal.", "free", 4.6, "https://www.photoroom.com", true],
  [56, "remove.bg", "image", "✂️", "removebg", "Tách nền ảnh tự động chỉ với một lần tải lên.", "Automatic image background removal in one upload.", "free", 4.5, "https://www.remove.bg", true],
  [57, "Microsoft Designer", "image", "🪄", "designer", "Thiết kế bài đăng và hình ảnh truyền thông bằng AI.", "AI-assisted social posts and visual design.", "free", 4.5, "https://designer.microsoft.com", false],
  [58, "Freepik AI", "image", "🖼️", "freepik", "Bộ công cụ tạo ảnh, mockup và chỉnh sửa thiết kế bằng AI.", "AI tools for images, mockups, and design editing.", "free", 4.5, "https://www.freepik.com/ai", true],
  [59, "Dreamina", "image", "🌈", "dreamina", "Tạo ảnh AI và nội dung sáng tạo trong hệ sinh thái CapCut.", "AI image generation for creative content in the CapCut ecosystem.", "free", 4.4, "https://dreamina.capcut.com", false],
  [60, "Figma AI", "image", "🎯", "figma", "Các tính năng AI hỗ trợ thiết kế giao diện và quy trình sản phẩm.", "AI features for interface design and product workflows.", "pro", 4.6, "https://www.figma.com/ai", false],
  [61, "Descript", "video", "🎙️", "descript", "Chỉnh sửa video và podcast bằng cách chỉnh sửa văn bản.", "Edit video and podcasts by editing the transcript.", "free", 4.6, "https://www.descript.com", false],
  [62, "OpusClip", "video", "📱", "opusclip", "Tự động cắt video dài thành các clip ngắn cho mạng xã hội.", "Turns long videos into social-ready short clips automatically.", "free", 4.6, "https://www.opus.pro", false],
  [63, "VEED", "video", "🎞️", "veed", "Tạo, dịch và thêm phụ đề video trực tuyến bằng AI.", "AI-assisted online video creation, translation, and captions.", "free", 4.5, "https://www.veed.io", false],
  [64, "Filmora AI", "video", "🎬", "filmora", "Trình dựng video có công cụ AI cho người mới bắt đầu.", "Beginner-friendly video editor with AI tools.", "free", 4.4, "https://filmora.wondershare.com", false],
  [65, "Adobe Premiere Pro", "video", "🎥", "premiere", "Dựng phim chuyên nghiệp với các tính năng AI của Adobe.", "Professional video editing with Adobe AI features.", "pro", 4.7, "https://www.adobe.com/products/premiere.html", false],
  [66, "Vidnoz AI", "video", "🧑‍💼", "vidnoz", "Tạo video avatar AI và thuyết minh đa ngôn ngữ.", "AI avatar videos with multilingual voiceovers.", "free", 4.4, "https://www.vidnoz.com", false],
  [67, "Akool", "video", "🧬", "akool", "Nền tảng video AI với avatar và dịch khuôn mặt.", "AI video platform for avatars and face translation.", "free", 4.4, "https://akool.com", true],
  [68, "GitLab Duo", "code", "🦊", "gitlab", "Trợ lý AI hỗ trợ toàn bộ vòng đời phát triển phần mềm.", "AI assistance across the software development lifecycle.", "pro", 4.5, "https://about.gitlab.com/gitlab-duo", false],
  [69, "Tabnine", "code", "⌨️", "tabnine", "Gợi ý và hoàn thành mã nguồn trong nhiều IDE.", "Code completion and suggestions across many IDEs.", "free", 4.4, "https://www.tabnine.com", false],
  [70, "Replit", "code", "⚙️", "replit", "Nền tảng lập trình trên web với AI Agent để tạo ứng dụng.", "Web development platform with an AI agent for building apps.", "free", 4.6, "https://replit.com", false],
  [71, "Devin", "code", "🤖", "devin", "AI agent hỗ trợ thực hiện tác vụ lập trình phức tạp.", "AI agent for handling multi-step software tasks.", "pro", 4.5, "https://devin.ai", false],
  [72, "Sourcegraph Cody", "code", "🔎", "sourcegraph", "Trợ lý hiểu codebase để tìm kiếm và viết mã.", "Codebase-aware assistant for search and coding.", "free", 4.4, "https://sourcegraph.com/cody", false],
  [73, "JetBrains AI Assistant", "code", "🧩", "jetbrains", "Trợ lý AI tích hợp trong các IDE của JetBrains.", "AI assistant built into JetBrains IDEs.", "pro", 4.5, "https://www.jetbrains.com/ai", false],
  [74, "Continue", "code", "🔁", "continue", "Trợ lý lập trình mã nguồn mở, có thể dùng model riêng.", "Open-source coding assistant that can use your choice of models.", "free", 4.4, "https://www.continue.dev", false],
  [75, "Aider", "code", "🛠️", "aider", "Công cụ AI chạy trong terminal để lập trình cùng Git.", "Terminal-based AI pair programmer that works with Git.", "free", 4.5, "https://aider.chat", false],
  [76, "v0", "code", "⚡", "v0", "Tạo giao diện web từ mô tả bằng ngôn ngữ tự nhiên.", "Generates web interfaces from natural-language descriptions.", "free", 4.6, "https://v0.dev", false],
  [77, "Bolt.new", "code", "⚡", "bolt", "Tạo và chạy ứng dụng web ngay trong trình duyệt với AI.", "Build and run web apps in the browser with AI.", "free", 4.6, "https://bolt.new", false],
  [78, "Lovable", "code", "💜", "lovable", "Tạo ứng dụng web từ yêu cầu bằng ngôn ngữ tự nhiên.", "Creates web applications from natural-language requirements.", "free", 4.6, "https://lovable.dev", false],
  [79, "Firebase Studio", "code", "🔥", "firebase", "Môi trường phát triển ứng dụng AI trên nền tảng Firebase.", "AI application development environment on Firebase.", "free", 4.5, "https://firebase.studio", false],
  [80, "Phind", "code", "🔍", "phind", "Công cụ tìm kiếm và trợ lý AI tối ưu cho lập trình viên.", "AI search and assistant optimized for developers.", "free", 4.5, "https://www.phind.com", false],
  [81, "HuggingChat", "chat", "🤗", "huggingface", "Trợ lý hội thoại miễn phí từ hệ sinh thái Hugging Face.", "Free conversational assistant from the Hugging Face ecosystem.", "free", 4.4, "https://huggingface.co/chat", false],
  [82, "Poe", "chat", "💬", "poe", "Một nơi để dùng và so sánh nhiều chatbot AI khác nhau.", "One place to use and compare many AI chatbots.", "free", 4.5, "https://poe.com", true],
  [83, "You.com", "chat", "🌐", "you", "Tìm kiếm và trò chuyện với AI có hỗ trợ nghiên cứu.", "AI search and chat with research support.", "free", 4.4, "https://you.com", true],
  [84, "Character.AI", "chat", "🗨️", "characterai", "Tạo và trò chuyện với các nhân vật AI tuỳ biến.", "Create and chat with customizable AI characters.", "free", 4.4, "https://character.ai", false],
  [85, "NotebookLM", "study", "📓", "notebooklm", "Nghiên cứu và hỏi đáp trực tiếp trên tài liệu của bạn.", "Research and ask questions directly across your own sources.", "free", 4.8, "https://notebooklm.google.com", false],
  [86, "Elicit", "study", "🔬", "elicit", "Trợ lý AI để tìm, tóm tắt và phân tích nghiên cứu.", "AI assistant for finding, summarizing, and analyzing research.", "free", 4.6, "https://elicit.com", false],
  [87, "Consensus", "study", "📚", "consensus", "Tìm câu trả lời dựa trên các bài báo khoa học.", "Find evidence-based answers from scientific papers.", "free", 4.6, "https://consensus.app", false],
  [88, "Scite", "study", "📖", "scite", "Phân tích trích dẫn khoa học và ngữ cảnh của chúng.", "Analyzes scientific citations and their context.", "pro", 4.5, "https://scite.ai", true],
  [89, "Otter.ai", "study", "📝", "otter", "Ghi âm, chép lời và tóm tắt cuộc họp bằng AI.", "AI meeting transcription, notes, and summaries.", "free", 4.6, "https://otter.ai", false],
  [90, "Photomath", "study", "➗", "photomath", "Quét bài toán và nhận hướng dẫn giải từng bước.", "Scan math problems and get step-by-step solutions.", "free", 4.5, "https://photomath.com", false],
  [91, "Brainly AI", "study", "🧠", "brainly", "Hỗ trợ giải bài tập và giải thích kiến thức cho học sinh.", "Homework help and explanations for students.", "free", 4.4, "https://brainly.com", false],
  [92, "ELSA Speak", "study", "🗣️", "elsa", "Luyện phát âm tiếng Anh với phản hồi AI cá nhân hoá.", "Practice English pronunciation with personalized AI feedback.", "free", 4.5, "https://elsaspeak.com", false],
  [93, "ElevenLabs", "study", "🔊", "elevenlabs", "Tạo giọng nói AI tự nhiên cho nội dung và học tập.", "Natural AI voices for content and learning.", "free", 4.7, "https://elevenlabs.io", true],
  [94, "Jasper", "chat", "✍️", "jasper", "Trợ lý AI chuyên viết nội dung và marketing.", "AI assistant focused on marketing and content creation.", "pro", 4.5, "https://www.jasper.ai", true],
  [95, "Copy.ai", "chat", "📣", "copyai", "Tạo nội dung marketing và tự động hoá quy trình bán hàng.", "Marketing copy generation and sales-workflow automation.", "free", 4.4, "https://www.copy.ai", true],
  [96, "Writesonic", "chat", "📝", "writesonic", "Viết nội dung, SEO và làm việc với AI agent.", "AI writing, SEO, and agentic workflows.", "free", 4.4, "https://writesonic.com", true],
  [97, "HubSpot Breeze", "chat", "🧡", "hubspot", "Các tính năng AI cho marketing, bán hàng và chăm sóc khách hàng.", "AI features for marketing, sales, and customer service.", "pro", 4.5, "https://www.hubspot.com/products/artificial-intelligence", false],
  [98, "Salesforce Einstein", "chat", "☁️", "salesforce", "AI cho dữ liệu khách hàng, bán hàng và dịch vụ doanh nghiệp.", "Enterprise AI for customer data, sales, and service.", "pro", 4.5, "https://www.salesforce.com/ai", false],
  [99, "Suno", "study", "🎵", "suno", "Tạo bài nhạc và bài hát từ mô tả bằng AI.", "Generate songs and music from text descriptions.", "free", 4.6, "https://suno.com", false],
  [100, "Udio", "study", "🎼", "udio", "Tạo nhạc AI với khả năng tuỳ chỉnh phong cách và lời bài hát.", "AI music generation with customizable style and lyrics.", "free", 4.5, "https://www.udio.com", false]
].map(([id, name, category, icon, logo, vi, en, badge, rating, link, hasApi]) => ({
  id, name, category, icon, logo, description: { vi, en }, badge, rating, link, hasApi: !!hasApi
}));

// =======================================
// DU LIEU SONG NGU: HUONG DAN SU DUNG AI
// =======================================
const aiGuide = [
  {
    icon: "🎯",
    name: {
      vi: "Bước 1: Chọn công cụ AI phù hợp",
      en: "Step 1: Choose the right AI tool"
    },
    content: {
      vi: "Trước tiên, hãy xác định mục đích sử dụng của bạn. Nếu bạn cần hỗ trợ học tập, viết nội dung hoặc lập trình, hãy chọn công cụ AI phù hợp với nhu cầu. Chọn đúng công cụ sẽ giúp bạn đạt được kết quả tốt hơn.",
      en: "Start by identifying your goal. If you need help with learning, writing, or coding, choose an AI tool that matches that need. Selecting the right tool usually leads to better results."
    }
  },
  {
    icon: "✍️",
    name: {
      vi: "Bước 2: Đặt câu hỏi rõ ràng",
      en: "Step 2: Write clear prompts"
    },
    content: {
      vi: "AI sẽ trả lời chính xác hơn khi bạn đưa ra yêu cầu cụ thể. Thay vì đặt câu hỏi ngắn hoặc mơ hồ, hãy mô tả rõ mục tiêu, nội dung cần thực hiện và yêu cầu về độ dài hoặc phong cách nếu cần.",
      en: "AI responds better when you give clear and specific instructions. Instead of vague prompts, describe your goal, the task details, and any preferences for length or tone."
    }
  },
  {
    icon: "🔍",
    name: {
      vi: "Bước 3: Kiểm tra kết quả",
      en: "Step 3: Review the output"
    },
    content: {
      vi: "Sau khi AI trả lời, hãy đọc và kiểm tra lại nội dung. Đối với thông tin quan trọng như bài học, số liệu hoặc tài liệu nghiên cứu, bạn nên đối chiếu với các nguồn đáng tin cậy để đảm bảo tính chính xác.",
      en: "After AI generates a result, review it carefully. For important information such as lessons, numbers, or research material, compare it with reliable sources to ensure accuracy."
    }
  },
  {
    icon: "🛠️",
    name: {
      vi: "Bước 4: Chỉnh sửa và tối ưu",
      en: "Step 4: Refine and improve"
    },
    content: {
      vi: "Nếu kết quả chưa đúng ý, bạn có thể yêu cầu AI chỉnh sửa, bổ sung hoặc viết lại theo phong cách mong muốn. Việc trao đổi nhiều lần sẽ giúp AI hiểu yêu cầu rõ hơn và tạo ra nội dung chất lượng hơn.",
      en: "If the result is not quite right, ask AI to revise, expand, or rewrite it in the style you want. Iterating a few times usually helps AI understand your request better and produce stronger content."
    }
  },
  {
    icon: "🔒",
    name: {
      vi: "Lưu ý khi sử dụng AI",
      en: "Important safety tips"
    },
    content: {
      vi: "Không nên chia sẻ thông tin cá nhân hoặc dữ liệu nhạy cảm với AI. Hãy sử dụng AI như một công cụ hỗ trợ thay vì phụ thuộc hoàn toàn, đồng thời tôn trọng bản quyền và kiểm tra nội dung trước khi đưa vào học tập hoặc công việc.",
      en: "Do not share personal or sensitive data with AI tools. Use AI as support rather than depending on it completely, respect copyright, and always review content before using it for school or work."
    }
  }
];

// =======================================
// DU LIEU SONG NGU: DANH SACH CONG CU AI
// category phai khop voi data-category trong sidebar:
// chat | image | video | code | finance | study
// badge: free | pro | hot
// =======================================
const aiTools = [
  {
    id: 1,
    name: "ChatGPT",
    category: "chat",
    icon: "🤖",
    logo: "openai",
    description: {
      vi: "Chatbot AI đa năng của OpenAI, hỗ trợ trò chuyện, viết lách, lập trình và giải đáp thắc mắc.",
      en: "OpenAI's all-purpose AI chatbot for conversation, writing, coding, and answering questions."
    },
    badge: "free",
    hasApi: true,
    rating: 4.8,
    link: "https://chat.openai.com",
    features: [
      { vi: "Trò chuyện tự nhiên, trả lời theo ngữ cảnh nhiều lượt", en: "Natural multi-turn conversation with context awareness" },
      { vi: "Viết nội dung, tóm tắt văn bản, dịch thuật", en: "Content writing, text summarization, translation" },
      { vi: "Hỗ trợ lập trình, giải thích và sửa lỗi code", en: "Coding assistance, code explanation and debugging" },
      { vi: "Tạo và phân tích hình ảnh (qua DALL·E, Vision)", en: "Image generation and analysis (via DALL·E, Vision)" }
    ],
    pros: [
      { vi: "Dễ sử dụng, giao diện thân thiện", en: "Easy to use, friendly interface" },
      { vi: "Hệ sinh thái plugin và tích hợp phong phú", en: "Rich plugin and integration ecosystem" },
      { vi: "Cập nhật tính năng thường xuyên", en: "Frequent feature updates" }
    ],
    cons: [
      { vi: "Bản miễn phí giới hạn số lượt dùng model mạnh", en: "Free tier limits usage of the strongest models" },
      { vi: "Đôi khi trả lời sai thông tin (ảo giác)", en: "Can occasionally hallucinate incorrect information" }
    ],
    usage: {
      vi: "Truy cập chat.openai.com, đăng nhập tài khoản OpenAI rồi nhập câu hỏi/yêu cầu vào ô chat để bắt đầu trò chuyện.",
      en: "Go to chat.openai.com, sign in with an OpenAI account, then type your question or request into the chat box to start."
    }
  },
  {
    id: 2,
    name: "Google Gemini",
    category: "chat",
    icon: "✨",
    logo: "gemini",
    description: {
      vi: "Trợ lý AI của Google, tích hợp sâu với Search, Gmail và các dịch vụ Google khác.",
      en: "Google's AI assistant with deep integration across Search, Gmail, and other Google services."
    },
    badge: "free",
    hasApi: true,
    rating: 4.6,
    link: "https://gemini.google.com",
    features: [
      { vi: "Tích hợp trực tiếp với Gmail, Docs, Search", en: "Deep integration with Gmail, Docs, and Search" },
      { vi: "Xử lý đa phương thức: văn bản, hình ảnh, giọng nói", en: "Multimodal: text, image, and voice input" },
      { vi: "Tìm kiếm thông tin thời gian thực từ Google Search", en: "Real-time information via Google Search" }
    ],
    pros: [
      { vi: "Tích hợp sâu vào hệ sinh thái Google", en: "Deep integration across the Google ecosystem" },
      { vi: "Tốc độ phản hồi nhanh", en: "Fast response speed" }
    ],
    cons: [
      { vi: "Một số tính năng nâng cao yêu cầu gói trả phí", en: "Some advanced features require a paid plan" }
    ],
    usage: {
      vi: "Truy cập gemini.google.com bằng tài khoản Google, sau đó nhập câu hỏi hoặc gắn tệp để được hỗ trợ.",
      en: "Visit gemini.google.com with a Google account, then type a question or attach a file to get help."
    }
  },
  {
    id: 3,
    name: "Claude",
    category: "chat",
    icon: "🧠",
    logo: "claude",
    description: {
      vi: "AI của Anthropic, nổi bật về tư duy logic, viết văn bản dài và xử lý tài liệu phức tạp.",
      en: "Anthropic's AI assistant known for strong reasoning, long-form writing, and document handling."
    },
    badge: "free",
    hasApi: true,
    rating: 4.9,
    link: "https://claude.ai",
    features: [
      { vi: "Xử lý văn bản/tài liệu rất dài trong một lượt chat", en: "Handles very long documents/text in a single chat" },
      { vi: "Tạo và chỉnh sửa tài liệu, bảng tính, slide ngay trong chat", en: "Create and edit documents, spreadsheets, slides in chat" },
      { vi: "Viết code và giải thích logic rõ ràng", en: "Strong coding assistance with clear reasoning" }
    ],
    pros: [
      { vi: "Tư duy logic mạch lạc, ít ảo giác hơn nhiều mô hình khác", en: "Coherent reasoning, fewer hallucinations than many models" },
      { vi: "Giọng văn tự nhiên, phù hợp viết lách chuyên sâu", en: "Natural tone, great for in-depth writing" }
    ],
    cons: [
      { vi: "Giới hạn số lượt chat với bản miễn phí", en: "Limited number of messages on the free plan" }
    ],
    usage: {
      vi: "Vào claude.ai, đăng ký/đăng nhập tài khoản, sau đó nhập yêu cầu vào ô chat hoặc tải tệp lên để Claude xử lý.",
      en: "Go to claude.ai, sign up or log in, then type your request in the chat box or upload a file for Claude to work with."
    }
  },
  {
    id: 4,
    name: "Grok",
    category: "chat",
    icon: "💬",
    logo: "grok",
    description: {
      vi: "Chatbot AI của xAI, tích hợp trên nền tảng X với khả năng cập nhật thông tin nhanh.",
      en: "xAI's chatbot integrated with X, designed for fast access to current information."
    },
    badge: "hot",
    hasApi: true,
    rating: 4.3,
    link: "https://x.ai"
  },
  {
    id: 5,
    name: "Midjourney",
    category: "image",
    icon: "🎨",
    logo: "midjourney",
    description: {
      vi: "Công cụ tạo ảnh AI nổi tiếng với chất lượng nghệ thuật cao và phong cách độc đáo.",
      en: "A leading AI image generator known for artistic quality and distinctive visual styles."
    },
    badge: "pro",
    hasApi: false,
    rating: 4.7,
    link: "https://midjourney.com",
    features: [
      { vi: "Tạo ảnh AI từ mô tả văn bản (prompt)", en: "Generate AI images from text prompts" },
      { vi: "Nhiều phong cách nghệ thuật: hội họa, ảnh thực, 3D...", en: "Many art styles: painting, photoreal, 3D, and more" },
      { vi: "Tùy chỉnh tỉ lệ khung hình, độ chi tiết, biến thể ảnh", en: "Customize aspect ratio, detail level, and image variations" }
    ],
    pros: [
      { vi: "Chất lượng hình ảnh và tính thẩm mỹ rất cao", en: "Very high image quality and aesthetics" },
      { vi: "Cộng đồng lớn, nhiều tài liệu và prompt mẫu", en: "Large community with many example prompts" }
    ],
    cons: [
      { vi: "Không có bản dùng thử miễn phí, phải trả phí ngay", en: "No free trial, requires a paid subscription" },
      { vi: "Chủ yếu thao tác qua Discord, không thân thiện với người mới", en: "Mainly used via Discord, less beginner-friendly" }
    ],
    usage: {
      vi: "Tham gia server Discord của Midjourney hoặc dùng web app, gõ lệnh /imagine kèm mô tả để tạo ảnh.",
      en: "Join Midjourney's Discord server or use the web app, type /imagine followed by a description to generate images."
    }
  },
  {
    id: 6,
    name: "DALL·E 3",
    category: "image",
    icon: "🖼️",
    logo: "dalle",
    description: {
      vi: "Công cụ tạo ảnh từ văn bản của OpenAI, được tích hợp trong ChatGPT.",
      en: "OpenAI's text-to-image model, available directly inside ChatGPT."
    },
    badge: "free",
    hasApi: true,
    rating: 4.5,
    link: "https://openai.com/dall-e-3"
  },
  {
    id: 7,
    name: "Adobe Firefly",
    category: "image",
    icon: "🔥",
    logo: "firefly",
    description: {
      vi: "AI tạo và chỉnh sửa ảnh của Adobe, tích hợp trực tiếp trong bộ công cụ sáng tạo.",
      en: "Adobe's AI suite for image generation and editing, integrated into creative workflows."
    },
    badge: "free",
    hasApi: true,
    rating: 4.4,
    link: "https://firefly.adobe.com"
  },
  {
    id: 8,
    name: "Runway",
    category: "video",
    icon: "🎬",
    logo: "runway",
    description: {
      vi: "Nền tảng AI tạo và chỉnh sửa video chuyên nghiệp, hỗ trợ text-to-video.",
      en: "A professional AI video platform for generating and editing video, including text-to-video."
    },
    badge: "pro",
    hasApi: true,
    rating: 4.5,
    link: "https://runwayml.com"
  },
  {
    id: 9,
    name: "Sora",
    category: "video",
    icon: "🎥",
    logo: "sora",
    description: {
      vi: "AI tạo video từ văn bản của OpenAI với hình ảnh chân thực và chuyển động mượt mà.",
      en: "OpenAI's text-to-video model focused on realistic visuals and smooth motion."
    },
    badge: "hot",
    hasApi: false,
    rating: 4.6,
    link: "https://openai.com/sora"
  },
  {
    id: 10,
    name: "Pika",
    category: "video",
    icon: "📹",
    logo: "pika",
    description: {
      vi: "Công cụ tạo video AI dễ sử dụng, phù hợp cho nội dung mạng xã hội.",
      en: "An easy-to-use AI video tool well suited for social media content."
    },
    badge: "free",
    hasApi: false,
    rating: 4.2,
    link: "https://pika.art"
  },
  {
    id: 11,
    name: "GitHub Copilot",
    category: "code",
    icon: "💻",
    logo: "githubcopilot",
    description: {
      vi: "Trợ lý lập trình AI trong IDE, gợi ý code thông minh theo thời gian thực.",
      en: "An AI coding assistant inside your IDE that provides real-time code suggestions."
    },
    badge: "pro",
    hasApi: false,
    rating: 4.7,
    link: "https://github.com/features/copilot",
    features: [
      { vi: "Gợi ý code tự động ngay trong IDE (VS Code, JetBrains...)", en: "Real-time code suggestions inside your IDE (VS Code, JetBrains, etc.)" },
      { vi: "Chat hỏi đáp về codebase, giải thích và refactor code", en: "Chat to ask about your codebase, explain, and refactor code" },
      { vi: "Hỗ trợ nhiều ngôn ngữ lập trình phổ biến", en: "Supports most popular programming languages" }
    ],
    pros: [
      { vi: "Tăng tốc độ viết code đáng kể", en: "Significantly speeds up coding" },
      { vi: "Tích hợp mượt mà với các IDE quen thuộc", en: "Smooth integration with familiar IDEs" }
    ],
    cons: [
      { vi: "Cần trả phí sau thời gian dùng thử", en: "Requires payment after the trial period" },
      { vi: "Gợi ý đôi khi chưa chính xác, cần kiểm tra lại", en: "Suggestions can sometimes be inaccurate and need review" }
    ],
    usage: {
      vi: "Cài extension GitHub Copilot trong IDE, đăng nhập tài khoản GitHub có đăng ký Copilot, rồi gõ code để nhận gợi ý tự động.",
      en: "Install the GitHub Copilot extension in your IDE, sign in with a GitHub account subscribed to Copilot, then start typing code to get suggestions."
    }
  },
  {
    id: 12,
    name: "Cursor",
    category: "code",
    icon: "⌨️",
    logo: "cursor",
    description: {
      vi: "Trình soạn thảo code tích hợp AI mạnh mẽ, hỗ trợ chat và sửa lỗi nhanh.",
      en: "An AI-first code editor with chat features and fast code assistance."
    },
    badge: "free",
    hasApi: false,
    rating: 4.6,
    link: "https://cursor.sh"
  },
  {
    id: 13,
    name: "Microsoft Copilot",
    category: "chat",
    icon: "📊",
    logo: "copilot",
    description: {
      vi: "Trợ lý AI của Microsoft hỗ trợ công việc văn phòng, tìm kiếm và tổng hợp thông tin.",
      en: "Microsoft's AI assistant for productivity, search, and everyday office tasks."
    },
    badge: "pro",
    hasApi: false,
    rating: 4.4,
    link: "https://copilot.microsoft.com"
  },
  {
    id: 14,
    name: "Notion AI",
    category: "chat",
    icon: "📝",
    logo: "notion",
    description: {
      vi: "Trợ lý AI trong Notion, hỗ trợ viết, tóm tắt và tổ chức công việc.",
      en: "Notion's built-in AI assistant for writing, summarizing, and organizing work."
    },
    badge: "free",
    hasApi: false,
    rating: 4.5,
    link: "https://notion.so/product/ai",
    features: [
      { vi: "Viết, chỉnh sửa và tóm tắt nội dung ngay trong trang Notion", en: "Write, edit, and summarize content directly inside Notion pages" },
      { vi: "Tự động tạo bảng, danh sách công việc từ ghi chú", en: "Auto-generate tables and task lists from notes" },
      { vi: "Hỏi đáp AI dựa trên toàn bộ workspace", en: "Q&A powered by your entire workspace" }
    ],
    pros: [
      { vi: "Liền mạch với thói quen ghi chú/quản lý công việc có sẵn", en: "Seamless with your existing notes and workflow" },
      { vi: "Tiết kiệm thời gian tổng hợp và soạn thảo tài liệu", en: "Saves time on drafting and summarizing documents" }
    ],
    cons: [
      { vi: "Tính năng AI là gói mở rộng trả phí thêm", en: "AI features are a paid add-on" }
    ],
    usage: {
      vi: "Trong bất kỳ trang Notion nào, gõ lệnh hoặc chọn 'Ask AI' để yêu cầu viết, tóm tắt hay chỉnh sửa nội dung.",
      en: "In any Notion page, type a command or select 'Ask AI' to write, summarize, or edit content."
    }
  },
  {
    id: 15,
    name: "Khanmigo",
    category: "study",
    icon: "📚",
    logo: "khanacademy",
    description: {
      vi: "AI của Khan Academy giúp giải thích bài học và hướng dẫn học sinh theo từng bước.",
      en: "Khan Academy's AI tutor that explains lessons and guides students step by step."
    },
    badge: "free",
    hasApi: false,
    rating: 4.5,
    link: "https://khanacademy.org/khan-labs"
  },
  {
    id: 16,
    name: "Duolingo Max",
    category: "study",
    icon: "🦉",
    logo: "duolingo",
    description: {
      vi: "Phiên bản AI nâng cao của Duolingo giúp luyện nói và giải thích ngữ pháp.",
      en: "Duolingo's enhanced AI plan for speaking practice and grammar explanations."
    },
    badge: "pro",
    hasApi: false,
    rating: 4.6,
    link: "https://duolingo.com"
  },
  {
    id: 17,
    name: "Perplexity",
    category: "chat",
    icon: "🔍",
    logo: "perplexity",
    description: {
      vi: "Công cụ tìm kiếm AI có trích dẫn nguồn để tham khảo nhanh.",
      en: "An AI search engine that provides cited sources for faster research."
    },
    badge: "free",
    hasApi: true,
    rating: 4.8,
    link: "https://perplexity.ai"
  },
  {
    id: 18,
    name: "DeepSeek",
    category: "chat",
    icon: "🐋",
    logo: "deepseek",
    description: {
      vi: "Mô hình AI mạnh về lập trình và suy luận.",
      en: "An AI model known for strong coding and reasoning performance."
    },
    badge: "free",
    hasApi: true,
    rating: 4.8,
    link: "https://chat.deepseek.com"
  },
  {
    id: 19,
    name: "Qwen",
    category: "chat",
    icon: "🌐",
    logo: "qwen",
    description: {
      vi: "Trợ lý AI của Alibaba cho nhiều nhu cầu hỏi đáp và làm việc.",
      en: "Alibaba's AI assistant for general productivity and question answering."
    },
    badge: "free",
    hasApi: true,
    rating: 4.7,
    link: "https://chat.qwen.ai"
  },
  {
    id: 20,
    name: "Meta AI",
    category: "chat",
    icon: "∞",
    logo: "meta",
    description: {
      vi: "Trợ lý AI của Meta được tích hợp trong hệ sinh thái sản phẩm của hãng.",
      en: "Meta's AI assistant integrated across the company's product ecosystem."
    },
    badge: "free",
    hasApi: false,
    rating: 4.7,
    link: "https://www.meta.ai"
  },
  {
    id: 21,
    name: "Kimi",
    category: "chat",
    icon: "🌙",
    logo: "kimi",
    description: {
      vi: "Trợ lý AI của Moonshot hỗ trợ hỏi đáp và xử lý thông tin.",
      en: "Moonshot's AI assistant for research, conversation, and information handling."
    },
    badge: "free",
    hasApi: true,
    rating: 4.7,
    link: "https://kimi.com"
  },
  {
    id: 22,
    name: "Mistral",
    category: "chat",
    icon: "⚡",
    logo: "mistral",
    description: {
      vi: "Le Chat của Mistral, phù hợp cho hỏi đáp và công việc hằng ngày.",
      en: "Mistral's Le Chat assistant for everyday work and conversations."
    },
    badge: "free",
    hasApi: true,
    rating: 4.7,
    link: "https://chat.mistral.ai"
  },
  {
    id: 23,
    name: "Codeium",
    category: "code",
    icon: "💻",
    logo: "codeium",
    description: {
      vi: "Công cụ AI hỗ trợ lập trình, gợi ý code và giải thích mã nguồn.",
      en: "An AI coding tool for code completion, suggestions, and source explanation."
    },
    badge: "free",
    hasApi: false,
    rating: 4.6,
    link: "https://codeium.com"
  },
  {
    id: 24,
    name: "Windsurf",
    category: "code",
    icon: "🌊",
    logo: "windsurf",
    description: {
      vi: "IDE hướng AI giúp lập trình nhanh hơn và dễ thao tác hơn.",
      en: "An AI-focused IDE designed to speed up software development."
    },
    badge: "free",
    hasApi: false,
    rating: 4.7,
    link: "https://windsurf.com"
  },
  {
    id: 25,
    name: "Amazon Q",
    category: "code",
    icon: "📦",
    logo: "amazon",
    description: {
      vi: "Trợ lý AI của AWS hỗ trợ lập trình và công việc doanh nghiệp.",
      en: "AWS's AI assistant for coding and enterprise productivity."
    },
    badge: "free",
    hasApi: true,
    rating: 4.5,
    link: "https://aws.amazon.com/q/"
  },
  {
    id: 26,
    name: "Canva AI",
    category: "image",
    icon: "🎨",
    logo: "canva",
    description: {
      vi: "Bộ công cụ AI trong Canva để thiết kế, viết nội dung và tạo hình nhanh.",
      en: "Canva's AI features for design, content creation, and quick visual editing."
    },
    badge: "free",
    hasApi: false,
    rating: 4.8,
    link: "https://canva.com"
  },
  {
    id: 27,
    name: "Gamma",
    category: "study",
    icon: "📊",
    logo: "gamma",
    description: {
      vi: "Công cụ AI tạo slide và tài liệu thuyết trình nhanh.",
      en: "An AI presentation tool for creating slides and documents quickly."
    },
    badge: "free",
    hasApi: false,
    rating: 4.7,
    link: "https://gamma.app"
  },
  {
    id: 28,
    name: "FLUX",
    category: "image",
    icon: "🖼️",
    logo: "flux",
    description: {
      vi: "Mô hình AI tạo ảnh chất lượng cao.",
      en: "A high-quality AI image generation model."
    },
    badge: "free",
    hasApi: true,
    rating: 4.8,
    link: "https://blackforestlabs.ai"
  },
  {
    id: 29,
    name: "Ideogram",
    category: "image",
    icon: "🖌️",
    logo: "ideogram",
    description: {
      vi: "Công cụ AI tạo ảnh và xử lý chữ trong hình ảnh rất tốt.",
      en: "An AI image generator especially strong at rendering text in images."
    },
    badge: "free",
    hasApi: true,
    rating: 4.8,
    link: "https://ideogram.ai"
  },
  {
    id: 30,
    name: "Stable Diffusion",
    category: "image",
    icon: "🎆",
    logo: "stability",
    description: {
      vi: "Mô hình tạo ảnh phổ biến, linh hoạt và có cộng đồng lớn.",
      en: "A widely used and flexible image generation model with a large community."
    },
    badge: "free",
    hasApi: true,
    rating: 4.7,
    link: "https://stability.ai"
  },
  {
    id: 31,
    name: "FinChat",
    category: "finance",
    icon: "📈",
    logo: "finchat",
    description: {
      vi: "Nền tảng AI phân tích cổ phiếu, báo cáo tài chính và dữ liệu doanh nghiệp.",
      en: "An AI platform for analyzing stocks, financial reports, and company data."
    },
    badge: "free",
    hasApi: false,
    rating: 4.5,
    link: "https://finchat.io"
  },
  {
    id: 32,
    name: "AlphaSense",
    category: "finance",
    icon: "🔎",
    logo: "alphasense",
    description: {
      vi: "Công cụ AI cho doanh nghiệp để tìm kiếm và phân tích tài liệu tài chính và tin tức thị trường.",
      en: "An enterprise AI platform for searching and analyzing financial documents and market news."
    },
    badge: "pro",
    hasApi: false,
    rating: 4.6,
    link: "https://alpha-sense.com"
  },
  {
    id: 33,
    name: "BloombergGPT",
    category: "finance",
    icon: "📊",
    logo: "bloomberg",
    description: {
      vi: "Mô hình AI phục vụ phân tích thị trường, tin tức và dữ liệu tài chính chuyên sâu.",
      en: "An AI model built for advanced financial data, market, and news analysis."
    },
    badge: "pro",
    hasApi: false,
    rating: 4.5,
    link: "https://bloomberg.com"
  },
  {
    id: 34,
    name: "Kavout",
    category: "finance",
    icon: "📉",
    logo: "kavout",
    description: {
      vi: "Công cụ AI hỗ trợ phân tích cổ phiếu, đánh giá xu hướng và xây dựng danh mục đầu tư.",
      en: "An AI investing tool for stock analysis, trend evaluation, and portfolio support."
    },
    badge: "free",
    hasApi: false,
    rating: 4.3,
    link: "https://kavout.com"
  },
  {
    id: 35,
    name: "Incite AI",
    category: "finance",
    icon: "📰",
    logo: "inciteai",
    description: {
      vi: "Công cụ tham khảo cho phân tích chứng khoán và xu hướng giá.",
      en: "An AI assistant for stock research and price trend insights."
    },
    badge: "free",
    hasApi: false,
    rating: 4.2,
    link: "https://incite.ai"
  },
  {
    id: 36,
    name: "Magnifi",
    category: "finance",
    icon: "💹",
    logo: "magnifi",
    description: {
      vi: "AI giúp tìm quỹ đầu tư, ETF và cổ phiếu dựa trên mục tiêu tài chính của người dùng.",
      en: "An AI investing search tool for funds, ETFs, and stocks based on user goals."
    },
    badge: "free",
    hasApi: false,
    rating: 4.3,
    link: "https://magnifi.com"
  },
  {
    id: 37,
    name: "Danelfin",
    category: "finance",
    icon: "⭐",
    logo: "danelfin",
    description: {
      vi: "Nền tảng AI chấm điểm cổ phiếu dựa trên chỉ số tài chính và kỹ thuật.",
      en: "An AI stock rating platform based on financial and technical indicators."
    },
    badge: "pro",
    hasApi: true,
    rating: 4.4,
    link: "https://danelfin.com"
  },
  {
    id: 38,
    name: "TrendSpider",
    category: "finance",
    icon: "🕸️",
    logo: "trendspider",
    description: {
      vi: "Công cụ AI hỗ trợ phân tích biểu đồ, phát hiện xu hướng và tự động hóa kỹ thuật.",
      en: "An AI platform for chart analysis, trend detection, and technical automation."
    },
    badge: "pro",
    hasApi: true,
    rating: 4.5,
    link: "https://trendspider.com"
  },
  {
    id: 39,
    name: "Tickeron",
    category: "finance",
    icon: "🎯",
    logo: "tickeron",
    description: {
      vi: "Nền tảng AI cung cấp tín hiệu giao dịch và hỗ trợ ra quyết định cho nhà đầu tư.",
      en: "An AI platform that provides trading signals and decision support for investors."
    },
    badge: "free",
    hasApi: false,
    rating: 4.3,
    link: "https://tickeron.com"
  },
  {
    id: 40,
    name: "Quizlet AI",
    category: "study",
    icon: "🗂️",
    logo: "quizlet",
    description: {
      vi: "Công cụ tạo flashcard, câu hỏi ôn tập và bài kiểm tra để học hiệu quả hơn.",
      en: "An AI study assistant for creating flashcards, review questions, and practice tests."
    },
    badge: "free",
    hasApi: false,
    rating: 4.6,
    link: "https://quizlet.com"
  },
  {
    id: 41,
    name: "Socratic",
    category: "study",
    icon: "📐",
    logo: "socratic",
    description: {
      vi: "Ứng dụng AI của Google giúp giải bài tập và học nhiều môn qua hình ảnh hoặc câu hỏi.",
      en: "Google's AI learning app that helps solve homework through photos and questions."
    },
    badge: "free",
    hasApi: false,
    rating: 4.5,
    link: "https://socratic.org"
  },
  {
    id: 42,
    name: "Wolfram Alpha",
    category: "study",
    icon: "🧮",
    logo: "wolframalpha",
    description: {
      vi: "Công cụ tính toán, giải toán và phân tích dữ liệu mạnh cho các môn STEM.",
      en: "A powerful computational engine for math, science, and STEM problem solving."
    },
    badge: "free",
    hasApi: true,
    rating: 4.7,
    link: "https://wolframalpha.com"
  },
  {
    id: 43,
    name: "Grammarly",
    category: "study",
    icon: "✅",
    logo: "grammarly",
    description: {
      vi: "Công cụ hỗ trợ chính tả, ngữ pháp và cải thiện kỹ năng viết tiếng Anh.",
      en: "A writing assistant for spelling, grammar, and clearer English communication."
    },
    badge: "free",
    hasApi: true,
    rating: 4.6,
    link: "https://grammarly.com"
  },
  {
    id: 44,
    name: "Veo",
    category: "video",
    icon: "🎞️",
    logo: "veo",
    description: {
      vi: "Mô hình tạo video của Google với chất lượng cao và chuyển động tự nhiên.",
      en: "Google's video generation model with high-quality output and natural motion."
    },
    badge: "hot",
    hasApi: true,
    rating: 4.7,
    link: "https://deepmind.google/technologies/veo"
  },
  {
    id: 45,
    name: "Kling AI",
    category: "video",
    icon: "🎬",
    logo: "kling",
    description: {
      vi: "Công cụ tạo video từ văn bản hoặc hình ảnh với hiệu ứng chân thực.",
      en: "An AI video generator that turns text or images into polished videos."
    },
    badge: "free",
    hasApi: true,
    rating: 4.6,
    link: "https://klingai.com"
  },
  {
    id: 46,
    name: "Hailuo AI",
    category: "video",
    icon: "🎥",
    logo: "hailuo",
    description: {
      vi: "Công cụ chuyển văn bản thành video nhanh cho nội dung ngắn và quảng cáo.",
      en: "A fast text-to-video tool for short-form content and promotional clips."
    },
    badge: "free",
    hasApi: true,
    rating: 4.4,
    link: "https://hailuoai.video"
  },
  {
    id: 47,
    name: "Luma AI",
    category: "video",
    icon: "🌀",
    logo: "luma",
    description: {
      vi: "Nền tảng tạo video 3D và video AI có chất lượng điện ảnh.",
      en: "An AI platform for 3D scenes and cinematic-quality video creation."
    },
    badge: "free",
    hasApi: true,
    rating: 4.5,
    link: "https://lumalabs.ai"
  },
  {
    id: 48,
    name: "Synthesia",
    category: "video",
    icon: "🧑‍💼",
    logo: "synthesia",
    description: {
      vi: "Công cụ tạo video với người dẫn chương trình ảo, phù hợp cho đào tạo và giới thiệu sản phẩm.",
      en: "An AI avatar video tool often used for training, demos, and product explainers."
    },
    badge: "pro",
    hasApi: true,
    rating: 4.6,
    link: "https://synthesia.io"
  },
  {
    id: 49,
    name: "HeyGen",
    category: "video",
    icon: "🗣️",
    logo: "heygen",
    description: {
      vi: "Nền tảng tạo video AI với nhân vật ảo, lồng tiếng tự động và hỗ trợ nhiều ngôn ngữ.",
      en: "An AI video platform with avatars, voiceover generation, and multilingual support."
    },
    badge: "pro",
    hasApi: true,
    rating: 4.6,
    link: "https://heygen.com"
  },
  {
    id: 50,
    name: "InVideo AI",
    category: "video",
    icon: "🎦",
    logo: "invideo",
    description: {
      vi: "Công cụ tạo video hoàn chỉnh từ văn bản, tự động thêm hình, giọng đọc và nhạc nền.",
      en: "An AI video creator that turns text into full videos with visuals, voice, and music."
    },
    badge: "free",
    hasApi: false,
    rating: 4.4,
    link: "https://invideo.io"
  },
  {
    id: 51,
    name: "CapCut AI",
    category: "video",
    icon: "✂️",
    logo: "capcut",
    description: {
      vi: "Bộ tính năng AI cho tạo video tự động, phụ đề, xóa nền và chỉnh sửa nhanh.",
      en: "CapCut's AI feature set for automatic video editing, captions, and background removal."
    },
    badge: "free",
    hasApi: false,
    rating: 4.7,
    link: "https://capcut.com"
  }
];

aiTools.push(...additionalAiTools);

const moreAiTools = [
  [101, "Ernie Bot", "chat", "🐻", "ernie", "Chatbot AI của Baidu, hỗ trợ trò chuyện và tìm kiếm bằng tiếng Trung.", "Baidu's AI chatbot for conversation and search, strong in Chinese language.", "free", 4.2, "https://yiyan.baidu.com", true],
  [102, "ChatGLM", "chat", "🀄", "chatglm", "Mô hình trò chuyện AI mã nguồn mở của Zhipu AI.", "Zhipu AI's open-source conversational AI model.", "free", 4.2, "https://chatglm.cn", true],
  [103, "Command R", "chat", "🎯", "cohere", "Mô hình trò chuyện AI của Cohere, tối ưu cho doanh nghiệp và tìm kiếm dữ liệu.", "Cohere's chat model optimized for enterprise use and retrieval-augmented search.", "free", 4.3, "https://cohere.com", true],
  [104, "Pi", "chat", "🌸", "pi", "Trợ lý AI cá nhân hoá của Inflection AI, tập trung vào trò chuyện thân thiện.", "Inflection AI's personal assistant focused on friendly, supportive conversation.", "free", 4.2, "https://pi.ai", false],
  [105, "iFlytek Spark", "chat", "⚡", "iflytek", "Trợ lý AI đa năng của iFlytek, mạnh về nhận diện giọng nói tiếng Trung.", "iFlytek's multi-purpose AI assistant, strong in Chinese speech recognition.", "free", 4.1, "https://xinghuo.xfyun.cn", true],
  [106, "SenseChat", "chat", "👁️", "sensetime", "Chatbot AI của SenseTime hỗ trợ trò chuyện và xử lý ngôn ngữ tự nhiên.", "SenseTime's chatbot for conversation and natural language processing.", "free", 4.0, "https://www.sensetime.com", true],
  [107, "Replika", "chat", "💗", "replika", "Người bạn đồng hành AI để trò chuyện và hỗ trợ tinh thần hằng ngày.", "An AI companion for daily conversation and emotional support.", "free", 4.1, "https://replika.com", false],
  [108, "Yi-Large", "chat", "🌟", "yi", "Mô hình ngôn ngữ lớn của 01.AI, hỗ trợ trò chuyện đa ngôn ngữ.", "01.AI's large language model supporting multilingual conversation.", "free", 4.2, "https://01.ai", true],
  [109, "Groq Chat", "chat", "🚀", "groq", "Nền tảng trò chuyện AI chạy trên chip LPU tốc độ cao của Groq.", "AI chat platform powered by Groq's high-speed LPU chips.", "free", 4.4, "https://groq.com", true],
  [110, "Le Chat", "chat", "🐦", "mistralchat", "Ứng dụng trò chuyện AI chính thức của Mistral.", "Mistral's official AI chat application.", "free", 4.3, "https://chat.mistral.ai", true],
  [111, "AI21 Jamba", "chat", "🔷", "ai21", "Mô hình ngôn ngữ của AI21 Labs, hỗ trợ trò chuyện và xử lý văn bản dài.", "AI21 Labs' language model for chat and long-document processing.", "free", 4.1, "https://www.ai21.com", true],
  [112, "Coze", "chat", "🧵", "coze", "Nền tảng xây dựng chatbot AI tuỳ chỉnh của ByteDance.", "ByteDance's platform for building custom AI chatbots.", "free", 4.2, "https://www.coze.com", true],
  [113, "MiniMax Chat", "chat", "🅜", "minimax", "Trợ lý trò chuyện AI đa năng của MiniMax.", "MiniMax's all-purpose AI chat assistant.", "free", 4.1, "https://www.minimax.io", true],
  [114, "Doubao", "chat", "🫘", "doubao", "Trợ lý AI trò chuyện phổ biến của ByteDance tại Trung Quốc.", "ByteDance's popular AI chat assistant in China.", "free", 4.2, "https://www.doubao.com", true],
  [115, "Rufus", "chat", "🛍️", "amazonrufus", "Trợ lý mua sắm AI của Amazon, gợi ý và so sánh sản phẩm.", "Amazon's AI shopping assistant for product suggestions and comparisons.", "free", 4.0, "https://www.amazon.com", false],
  [116, "WPS AI", "chat", "📄", "wps", "Trợ lý AI tích hợp trong bộ ứng dụng văn phòng WPS.", "AI assistant built into the WPS Office suite.", "free", 4.1, "https://www.wps.com", false],
  [117, "Baichuan AI", "chat", "🌊", "baichuan", "Mô hình trò chuyện AI tiếng Trung của Baichuan Intelligence.", "Baichuan Intelligence's Chinese-language AI chat model.", "free", 4.0, "https://www.baichuan-ai.com", true],
  [118, "StepFun", "chat", "🪜", "stepfun", "Trợ lý AI đa phương thức của StepFun hỗ trợ trò chuyện và hình ảnh.", "StepFun's multimodal AI assistant for chat and images.", "free", 4.0, "https://www.stepfun.com", true],
  [119, "Playground AI", "image", "🎪", "playground", "Nền tảng tạo ảnh AI với nhiều mô hình và công cụ chỉnh sửa miễn phí.", "AI image platform with multiple models and free editing tools.", "free", 4.4, "https://playgroundai.com", true],
  [120, "NightCafe", "image", "☕", "nightcafe", "Cộng đồng tạo ảnh AI với nhiều phong cách nghệ thuật.", "AI art-generation community with a wide range of styles.", "free", 4.3, "https://creator.nightcafe.studio", false],
  [121, "Artbreeder", "image", "🧬", "artbreeder", "Công cụ pha trộn và tiến hoá hình ảnh AI để tạo nhân vật và phong cảnh.", "AI tool for blending and evolving images into characters and landscapes.", "free", 4.2, "https://www.artbreeder.com", false],
  [122, "DeepAI", "image", "🔷", "deepai", "Bộ công cụ AI tạo ảnh và xử lý hình ảnh trực tuyến miễn phí.", "Free online suite of AI image generation and processing tools.", "free", 4.1, "https://deepai.org", true],
  [123, "Bing Image Creator", "image", "🪁", "bingimage", "Công cụ tạo ảnh AI của Microsoft tích hợp trong Bing.", "Microsoft's AI image generator built into Bing.", "free", 4.3, "https://www.bing.com/images/create", false],
  [124, "Deep Dream Generator", "image", "🌀", "deepdream", "Công cụ tạo ảnh nghệ thuật AI theo phong cách mơ mộng, siêu thực.", "AI art generator for dreamlike, surreal visual styles.", "free", 4.0, "https://deepdreamgenerator.com", false],
  [125, "Craiyon", "image", "🖍️", "craiyon", "Công cụ tạo ảnh AI đơn giản, miễn phí, dễ sử dụng.", "A simple, free, easy-to-use AI image generator.", "free", 4.0, "https://www.craiyon.com", false],
  [126, "Pixlr", "image", "🖌️", "pixlr", "Trình chỉnh sửa ảnh trực tuyến có tích hợp công cụ AI.", "Online photo editor with built-in AI tools.", "free", 4.3, "https://pixlr.com", false],
  [127, "Fotor AI", "image", "🖼️", "fotor", "Công cụ chỉnh sửa và tạo ảnh AI cho thiết kế và marketing.", "AI photo editing and generation tool for design and marketing.", "free", 4.2, "https://www.fotor.com", false],
  [128, "Photoshop Generative Fill", "image", "🩹", "photoshop", "Tính năng AI của Photoshop giúp thêm, xoá và mở rộng nội dung ảnh.", "Photoshop's AI feature for adding, removing, and extending image content.", "pro", 4.6, "https://www.adobe.com/products/photoshop.html", false],
  [129, "Getimg.ai", "image", "🎡", "getimg", "Nền tảng tạo và chỉnh sửa ảnh AI với nhiều mô hình khác nhau.", "AI image generation and editing platform with multiple model options.", "free", 4.3, "https://getimg.ai", true],
  [130, "Civitai", "image", "🗿", "civitai", "Cộng đồng chia sẻ mô hình và tạo ảnh AI dựa trên Stable Diffusion.", "Community for sharing models and generating AI art with Stable Diffusion.", "free", 4.3, "https://civitai.com", true],
  [131, "Magnific AI", "image", "🔍", "magnific", "Công cụ nâng cấp và tăng chi tiết ảnh AI chất lượng cao.", "AI tool for high-quality image upscaling and detail enhancement.", "pro", 4.6, "https://magnific.ai", false],
  [132, "Clipdrop", "image", "📎", "clipdrop", "Bộ công cụ AI của Stability AI để chỉnh sửa và tạo ảnh nhanh.", "Stability AI's toolkit for fast AI image editing and generation.", "free", 4.3, "https://clipdrop.co", true],
  [133, "Vheer", "image", "🦌", "vheer", "Công cụ tạo ảnh AI miễn phí, không cần đăng ký.", "Free AI image generator that requires no sign-up.", "free", 4.0, "https://vheer.com", false],
  [134, "PixAI", "image", "🎴", "pixai", "Nền tảng tạo ảnh AI chuyên về phong cách anime.", "AI image platform specializing in anime-style art.", "free", 4.2, "https://pixai.art", true],
  [135, "Pictory", "video", "🎦", "pictory", "Chuyển văn bản và bài viết thành video ngắn tự động bằng AI.", "Automatically turns text and articles into short videos with AI.", "free", 4.4, "https://pictory.ai", true],
  [136, "Elai.io", "video", "🧑‍🏫", "elai", "Tạo video có avatar AI thuyết trình từ văn bản.", "Creates AI-avatar presenter videos from text.", "free", 4.3, "https://elai.io", true],
  [137, "D-ID", "video", "🪪", "did", "Công cụ tạo video avatar AI nói chuyện từ ảnh chân dung.", "AI tool that creates talking-avatar videos from a portrait photo.", "free", 4.4, "https://www.d-id.com", true],
  [138, "Colossyan", "video", "🎓", "colossyan", "Nền tảng tạo video đào tạo với avatar AI đa ngôn ngữ.", "Training-video platform with multilingual AI avatars.", "free", 4.3, "https://www.colossyan.com", false],
  [139, "Steve AI", "video", "🎨", "steveai", "Tạo video hoạt hình và video thực từ văn bản bằng AI.", "Creates animated and live-action videos from text using AI.", "free", 4.2, "https://www.steve.ai", false],
  [140, "Rephrase.ai", "video", "🗣️", "rephrase", "Tạo video cá nhân hoá với avatar AI cho marketing và đào tạo.", "Creates personalized AI-avatar videos for marketing and training.", "pro", 4.2, "https://www.rephrase.ai", false],
  [141, "Synthesys", "video", "🎭", "synthesys", "Bộ công cụ AI tạo giọng nói và video avatar chuyên nghiệp.", "AI toolkit for professional voiceovers and avatar videos.", "pro", 4.2, "https://synthesys.io", false],
  [142, "Fliki", "video", "🐣", "fliki", "Biến bài viết thành video có giọng đọc AI tự nhiên.", "Turns blog posts into videos with natural AI voiceovers.", "free", 4.4, "https://fliki.ai", false],
  [143, "Renderforest", "video", "🌲", "renderforest", "Nền tảng tạo video, logo và website hỗ trợ AI.", "AI-assisted platform for creating videos, logos, and websites.", "free", 4.2, "https://www.renderforest.com", false],
  [144, "Movio", "video", "🎦", "movio", "Tạo video avatar AI đa ngôn ngữ cho nội dung doanh nghiệp.", "Multilingual AI-avatar video creation for business content.", "free", 4.1, "https://www.movio.la", false],
  [145, "Wisecut", "video", "✂️", "wisecut", "Tự động dựng video và thêm nhạc nền bằng AI.", "Automatically edits video and adds background music using AI.", "free", 4.2, "https://wisecut.video", false],
  [146, "Vizard", "video", "🪄", "vizard", "Cắt video dài thành clip ngắn viral bằng AI.", "Uses AI to turn long videos into viral short clips.", "free", 4.3, "https://vizard.ai", false],
  [147, "Topaz Video AI", "video", "🔬", "topaz", "Nâng cấp độ phân giải và chất lượng video bằng AI.", "AI-powered video upscaling and quality enhancement.", "pro", 4.5, "https://www.topazlabs.com/topaz-video-ai", false],
  [148, "Clipchamp", "video", "🎬", "clipchamp", "Trình chỉnh sửa video của Microsoft có công cụ AI hỗ trợ.", "Microsoft's video editor with built-in AI-assisted tools.", "free", 4.3, "https://clipchamp.com", false],
  [149, "Simplified Video", "video", "🧊", "simplified", "Công cụ tạo và chỉnh sửa video AI cho nội dung mạng xã hội.", "AI video creation and editing tool for social media content.", "free", 4.1, "https://simplified.com", false],
  [150, "Deepbrain AI", "video", "🧠", "deepbrain", "Tạo video avatar AI chân thực cho thuyết trình và đào tạo.", "Creates realistic AI-avatar videos for presentations and training.", "pro", 4.3, "https://www.deepbrain.io", true],
  [151, "Codex CLI", "code", "🖥️", "codexcli", "Công cụ dòng lệnh AI của OpenAI để lập trình ngay trên terminal.", "OpenAI's command-line AI coding tool for the terminal.", "free", 4.4, "https://openai.com/codex", false],
  [152, "Cline", "code", "🤖", "cline", "Trợ lý lập trình AI mã nguồn mở chạy trực tiếp trong VS Code.", "Open-source AI coding agent that runs directly inside VS Code.", "free", 4.4, "https://cline.bot", false],
  [153, "Warp AI", "code", "🌐", "warp", "Terminal thông minh tích hợp AI hỗ trợ gõ lệnh và gỡ lỗi.", "A smart terminal with built-in AI for commands and debugging.", "free", 4.4, "https://www.warp.dev", false],
  [154, "Blackbox AI", "code", "⬛", "blackbox", "Trợ lý lập trình AI hỗ trợ tìm kiếm và tạo mã nguồn.", "AI coding assistant for code search and generation.", "free", 4.2, "https://www.blackbox.ai", true],
  [155, "Mutable AI", "code", "🔧", "mutableai", "Công cụ AI giúp tăng tốc viết mã và tái cấu trúc codebase.", "AI tool that speeds up coding and codebase refactoring.", "free", 4.1, "https://mutable.ai", false],
  [156, "AskCodi", "code", "💡", "askcodi", "Trợ lý AI hỗ trợ viết mã, tài liệu và kiểm thử phần mềm.", "AI assistant for writing code, documentation, and tests.", "free", 4.0, "https://www.askcodi.com", false],
  [157, "Sweep AI", "code", "🧹", "sweep", "AI agent tự động sửa lỗi và tạo pull request trên GitHub.", "AI agent that automatically fixes bugs and opens GitHub pull requests.", "free", 4.1, "https://sweep.dev", false],
  [158, "Refact.ai", "code", "🔩", "refact", "Trợ lý lập trình AI mã nguồn mở hỗ trợ hoàn thành và tái cấu trúc mã.", "Open-source AI coding assistant for completion and refactoring.", "free", 4.1, "https://refact.ai", false],
  [159, "CodeRabbit", "code", "🐇", "coderabbit", "Công cụ AI tự động review mã nguồn trong pull request.", "AI tool that automatically reviews code in pull requests.", "free", 4.4, "https://www.coderabbit.ai", false],
  [160, "Qodo", "code", "🧪", "qodo", "Trợ lý AI tạo kiểm thử và review mã nguồn tự động.", "AI assistant for automated code testing and review.", "free", 4.3, "https://www.qodo.ai", false],
  [161, "Zed AI", "code", "⚡", "zed", "Trình soạn thảo mã nguồn tốc độ cao với trợ lý AI tích hợp.", "A high-performance code editor with a built-in AI assistant.", "free", 4.4, "https://zed.dev", false],
  [162, "Snyk DeepCode", "code", "🛡️", "snyk", "Công cụ AI quét lỗ hổng bảo mật trong mã nguồn.", "AI-powered tool for scanning security vulnerabilities in code.", "free", 4.3, "https://snyk.io", true],
  [163, "Magic.dev", "code", "✨", "magicdev", "AI agent lập trình tự động cho các tác vụ phần mềm phức tạp.", "Autonomous AI coding agent for complex software tasks.", "pro", 4.2, "https://magic.dev", false],
  [164, "Augment Code", "code", "🧭", "augment", "Trợ lý AI hiểu toàn bộ codebase để hỗ trợ lập trình nhóm.", "AI assistant with full-codebase context for team development.", "pro", 4.3, "https://www.augmentcode.com", false],
  [165, "CodeGeeX", "code", "🌉", "codegeex", "Trợ lý lập trình AI đa ngôn ngữ của Zhipu AI.", "Zhipu AI's multilingual AI coding assistant.", "free", 4.1, "https://codegeex.cn", true],
  [166, "Pear AI", "code", "🍐", "pearai", "Trình soạn thảo mã nguồn mở tích hợp AI cho lập trình viên.", "Open-source AI-powered code editor for developers.", "free", 4.0, "https://trypear.ai", false],
  [167, "Aide", "code", "🧩", "aide", "Trợ lý lập trình AI mã nguồn mở tích hợp trong IDE.", "Open-source AI coding assistant built into the IDE.", "free", 4.0, "https://aide.dev", false],
  [168, "Trae", "code", "🚴", "trae", "IDE tích hợp AI của ByteDance hỗ trợ lập trình viên.", "ByteDance's AI-powered IDE for developers.", "free", 4.2, "https://www.trae.ai", false],
  [169, "Coursera Coach", "study", "🎓", "coursera", "Trợ lý AI của Coursera hỗ trợ học tập và giải thích bài giảng.", "Coursera's AI assistant for learning support and lecture explanations.", "free", 4.2, "https://www.coursera.org", false],
  [170, "Chegg CheggMate", "study", "📗", "chegg", "Trợ lý học tập AI của Chegg hỗ trợ giải bài tập.", "Chegg's AI study assistant for homework help.", "pro", 4.0, "https://www.chegg.com", false],
  [171, "StudyFetch", "study", "📚", "studyfetch", "Nền tảng học tập AI tạo flashcard và hướng dẫn học cá nhân hoá.", "AI learning platform that creates flashcards and personalized study guides.", "free", 4.2, "https://www.studyfetch.com", false],
  [172, "Gradescope", "study", "✅", "gradescope", "Công cụ chấm bài và phản hồi tự động hỗ trợ AI cho giáo viên.", "AI-assisted grading and feedback tool for teachers.", "free", 4.2, "https://www.gradescope.com", false],
  [173, "Speechify", "study", "🔊", "speechify", "Chuyển văn bản thành giọng đọc AI tự nhiên để học và nghe tài liệu.", "Converts text into natural AI speech for studying and listening.", "free", 4.4, "https://speechify.com", true],
  [174, "Quillbot", "study", "✍️", "quillbot", "Công cụ AI diễn giải, tóm tắt và kiểm tra ngữ pháp văn bản.", "AI tool for paraphrasing, summarizing, and grammar checking.", "free", 4.4, "https://quillbot.com", false],
  [175, "Wordtune", "study", "🔤", "wordtune", "Trợ lý AI viết lại và cải thiện câu văn tự nhiên hơn.", "AI writing assistant that rewrites sentences to sound more natural.", "free", 4.3, "https://www.wordtune.com", false],
  [176, "Speak", "study", "🗨️", "speak", "Ứng dụng luyện nói ngoại ngữ với AI có phản hồi trực tiếp.", "Language-speaking practice app with real-time AI feedback.", "free", 4.4, "https://www.speak.com", false],
  [177, "Busuu", "study", "🐝", "busuu", "Ứng dụng học ngoại ngữ có tính năng AI hỗ trợ luyện tập.", "Language-learning app with AI-assisted practice features.", "free", 4.3, "https://www.busuu.com", false],
  [178, "Babbel", "study", "🦜", "babbel", "Ứng dụng học ngôn ngữ có bài học được cá nhân hoá bằng AI.", "Language-learning app with AI-personalized lessons.", "free", 4.3, "https://www.babbel.com", false],
  [179, "Cognii", "study", "🧠", "cognii", "Trợ lý AI đánh giá và phản hồi bài luận cho học sinh.", "AI assistant that evaluates and gives feedback on student essays.", "free", 4.0, "https://www.cognii.com", false],
  [180, "Squirrel AI", "study", "🐿️", "squirrelai", "Nền tảng học tập thích ứng bằng AI theo trình độ từng học sinh.", "Adaptive AI learning platform tailored to each student's level.", "free", 4.1, "https://squirrelai.com", false],
  [181, "Century Tech", "study", "🌆", "century", "Nền tảng học tập AI cá nhân hoá lộ trình cho từng học sinh.", "AI learning platform that personalizes each student's learning path.", "free", 4.1, "https://www.century.tech", false],
  [182, "Sana Labs", "study", "🎯", "sana", "Nền tảng học tập và đào tạo doanh nghiệp ứng dụng AI.", "AI-powered learning and corporate training platform.", "pro", 4.2, "https://sanalabs.com", false],
  [183, "Numerade", "study", "🔢", "numerade", "Nền tảng học tập AI giải thích bài tập khoa học và toán học từng bước.", "AI learning platform with step-by-step science and math explanations.", "free", 4.2, "https://www.numerade.com", false],
  [184, "CourseHero AI", "study", "🦸", "coursehero", "Trợ lý học tập AI của Course Hero hỗ trợ giải bài và ôn tập.", "Course Hero's AI study assistant for homework help and review.", "pro", 4.0, "https://www.coursehero.com", false],
  [185, "Wealthfront", "finance", "🌳", "wealthfront", "Dịch vụ đầu tư tự động sử dụng AI để quản lý danh mục.", "Automated investing service that uses AI to manage portfolios.", "free", 4.2, "https://www.wealthfront.com", false],
  [186, "Betterment", "finance", "📈", "betterment", "Nền tảng quản lý tài sản tự động với thuật toán AI.", "Automated wealth-management platform powered by AI algorithms.", "free", 4.2, "https://www.betterment.com", false],
  [187, "Cleo", "finance", "🐙", "cleo", "Trợ lý tài chính cá nhân AI giúp theo dõi chi tiêu qua trò chuyện.", "AI personal-finance assistant that tracks spending through chat.", "free", 4.1, "https://www.meetcleo.com", false],
  [188, "Copilot Money", "finance", "💰", "copilotmoney", "Ứng dụng quản lý tài chính cá nhân với phân loại chi tiêu bằng AI.", "Personal finance app that categorizes spending using AI.", "pro", 4.4, "https://copilot.money", false],
  [189, "Rogo AI", "finance", "🏦", "rogo", "Trợ lý AI dành cho nhà phân tích tài chính và ngân hàng đầu tư.", "AI assistant built for financial analysts and investment bankers.", "pro", 4.2, "https://rogo.ai", false],
  [190, "Hebbia", "finance", "🔎", "hebbia", "AI tìm kiếm và phân tích tài liệu tài chính phức tạp.", "AI for searching and analyzing complex financial documents.", "pro", 4.3, "https://www.hebbia.ai", false],
  [191, "Daloopa", "finance", "📊", "daloopa", "Nền tảng AI tự động hoá xây dựng mô hình tài chính từ báo cáo.", "AI platform that automates financial-model building from filings.", "pro", 4.1, "https://daloopa.com", true],
  [192, "Kensho", "finance", "🔮", "kensho", "Công cụ AI phân tích dữ liệu thị trường tài chính của S&P Global.", "S&P Global's AI tool for analyzing financial market data.", "pro", 4.2, "https://www.kensho.com", false],
  [193, "Arta Finance", "finance", "🏛️", "arta", "Nền tảng quản lý gia sản ứng dụng AI cho nhà đầu tư cá nhân.", "AI-powered wealth-management platform for individual investors.", "pro", 4.1, "https://arta.io", false],
  [194, "Composer", "finance", "🎼", "composer", "Nền tảng đầu tư tự động cho phép xây dựng chiến lược bằng AI.", "Automated investing platform for building strategies with AI.", "free", 4.1, "https://www.composer.trade", true],
  [195, "Wealthsimple", "finance", "🍁", "wealthsimple", "Nền tảng đầu tư và tài chính cá nhân có công cụ hỗ trợ AI.", "Investing and personal-finance platform with AI-assisted tools.", "free", 4.2, "https://www.wealthsimple.com", false],
  [196, "Origin Financial", "finance", "🧭", "origin", "Ứng dụng lập kế hoạch tài chính cá nhân hỗ trợ bởi AI.", "Personal financial-planning app supported by AI.", "pro", 4.1, "https://useorigin.com", false],
  [197, "Zest AI", "finance", "🍋", "zest", "Nền tảng AI chấm điểm tín dụng cho các tổ chức cho vay.", "AI credit-scoring platform for lending institutions.", "pro", 4.1, "https://www.zest.ai", false],
  [198, "Toggle AI", "finance", "🔀", "toggle", "Trợ lý AI phân tích thị trường tài chính cho nhà đầu tư.", "AI assistant for financial market analysis aimed at investors.", "pro", 4.1, "https://www.toggle.ai", false],
  [199, "Fintool", "finance", "🧾", "fintool", "AI hỗ trợ nhà đầu tư nghiên cứu báo cáo tài chính doanh nghiệp.", "AI that helps investors research corporate financial filings.", "pro", 4.2, "https://fintool.io", false],
  [200, "Canoe Intelligence", "finance", "🛶", "canoe", "Nền tảng AI tự động hoá xử lý tài liệu đầu tư thay thế.", "AI platform that automates alternative-investment document processing.", "pro", 4.1, "https://canoeintelligence.com", false],
].map(([id, name, category, icon, logo, vi, en, badge, rating, link, hasApi]) => ({
  id, name, category, icon, logo, description: { vi, en }, badge, rating, link, hasApi: !!hasApi
}));

aiTools.push(...moreAiTools);

// =======================================
// DU LIEU SONG NGU: AI THEO NGHE
// =======================================
const aiByProfession = [
  {
    icon: "💼",
    title: { vi: "AI cho Dân văn phòng", en: "AI for Office Workers" },
    intro: { vi: "Sử dụng AI để:", en: "Use AI to:" },
    tasks: [
      { vi: "Soạn email chuyên nghiệp", en: "Write professional emails" },
      { vi: "Viết báo cáo", en: "Write reports" },
      { vi: "Tóm tắt tài liệu", en: "Summarize documents" },
      { vi: "Dịch văn bản", en: "Translate text" },
      { vi: "Tạo slide thuyết trình", en: "Create presentation slides" }
    ],
    suggested: ["ChatGPT", "Claude", "Gemini", "Gamma", "Notion AI"]
  },
  {
    icon: "💻",
    title: { vi: "AI cho Lập trình viên", en: "AI for Developers" },
    intro: { vi: "AI giúp:", en: "AI helps you:" },
    tasks: [
      { vi: "Viết mã nguồn", en: "Write source code" },
      { vi: "Giải thích code", en: "Explain code" },
      { vi: "Sửa lỗi", en: "Fix bugs" },
      { vi: "Tạo website", en: "Build websites" },
      { vi: "Viết tài liệu kỹ thuật", en: "Write technical documentation" }
    ],
    suggested: ["Claude", "ChatGPT", "GitHub Copilot", "Gemini", "Cursor"]
  },
  {
    icon: "🎨",
    title: { vi: "AI cho Thiết kế", en: "AI for Designers" },
    intro: { vi: "AI hỗ trợ:", en: "AI supports you with:" },
    tasks: [
      { vi: "Tạo hình ảnh", en: "Generate images" },
      { vi: "Thiết kế logo", en: "Design logos" },
      { vi: "Banner quảng cáo", en: "Create ad banners" },
      { vi: "Chỉnh sửa ảnh", en: "Edit photos" },
      { vi: "Xóa nền", en: "Remove backgrounds" }
    ],
    suggested: ["Midjourney", "Canva AI", "Adobe Firefly", "Ideogram", "Leonardo AI"]
  },
  {
    icon: "🎬",
    title: { vi: "AI cho Người làm Video", en: "AI for Video Creators" },
    intro: { vi: "AI giúp:", en: "AI helps you:" },
    tasks: [
      { vi: "Tạo video từ văn bản", en: "Generate video from text" },
      { vi: "Tạo avatar AI", en: "Create AI avatars" },
      { vi: "Lồng tiếng", en: "Add voiceovers" },
      { vi: "Tạo phụ đề", en: "Generate subtitles" },
      { vi: "Dịch video", en: "Translate videos" }
    ],
    suggested: ["Veo", "Runway", "Pika", "HeyGen", "CapCut AI"]
  },
  {
    icon: "📚",
    title: { vi: "AI cho Học sinh & Sinh viên", en: "AI for Students" },
    intro: { vi: "AI hỗ trợ:", en: "AI supports you with:" },
    tasks: [
      { vi: "Giải bài tập", en: "Solve homework" },
      { vi: "Học ngoại ngữ", en: "Learn foreign languages" },
      { vi: "Viết luận", en: "Write essays" },
      { vi: "Tóm tắt sách", en: "Summarize books" },
      { vi: "Lập kế hoạch học tập", en: "Plan study schedules" }
    ],
    suggested: ["ChatGPT", "Gemini", "Perplexity", "Khanmigo", "Quizlet AI"]
  },
  {
    icon: "📈",
    title: { vi: "AI cho Marketing", en: "AI for Marketing" },
    intro: { vi: "AI giúp:", en: "AI helps you:" },
    tasks: [
      { vi: "Viết bài quảng cáo", en: "Write ad copy" },
      { vi: "Viết content Facebook", en: "Write Facebook content" },
      { vi: "SEO", en: "Optimize SEO" },
      { vi: "Email Marketing", en: "Run email marketing" },
      { vi: "Phân tích khách hàng", en: "Analyze customers" }
    ],
    suggested: ["ChatGPT", "Jasper", "Copy.ai", "Claude", "Canva AI"]
  },
  {
    icon: "💰",
    title: { vi: "AI cho Kinh doanh", en: "AI for Business" },
    intro: { vi: "AI hỗ trợ:", en: "AI supports you with:" },
    tasks: [
      { vi: "Phân tích dữ liệu", en: "Analyze data" },
      { vi: "Dự báo doanh thu", en: "Forecast revenue" },
      { vi: "Chăm sóc khách hàng", en: "Support customers" },
      { vi: "Chatbot bán hàng", en: "Run sales chatbots" },
      { vi: "Viết mô tả sản phẩm", en: "Write product descriptions" }
    ],
    suggested: ["ChatGPT", "Claude", "Gemini", "HubSpot AI", "Salesforce Einstein"]
  },
  {
    icon: "📱",
    title: { vi: "AI cho Nhà sáng tạo nội dung", en: "AI for Content Creators" },
    intro: { vi: "AI giúp:", en: "AI helps you:" },
    tasks: [
      { vi: "Viết kịch bản", en: "Write scripts" },
      { vi: "Lên ý tưởng video", en: "Brainstorm video ideas" },
      { vi: "Tạo thumbnail", en: "Create thumbnails" },
      { vi: "Viết tiêu đề hấp dẫn", en: "Write catchy titles" },
      { vi: "Tạo giọng đọc AI", en: "Generate AI voiceovers" }
    ],
    suggested: ["ChatGPT", "Claude", "Veo", "ElevenLabs", "Canva AI"]
  }
];

// =======================================
// DANH MỤC MẶC ĐỊNH (dùng để "Nhập dữ liệu mặc định" lên Firebase lần đầu,
// và làm dữ liệu dự phòng khi chưa cấu hình/kết nối được Firebase)
// =======================================
const DEFAULT_CATEGORIES = [
  { slug: "chat", icon: "💬", labelVi: "Chat AI", labelEn: "Chat AI" },
  { slug: "image", icon: "🎨", labelVi: "AI Hình ảnh", labelEn: "Image AI" },
  { slug: "video", icon: "🎬", labelVi: "AI Video", labelEn: "Video AI" },
  { slug: "code", icon: "💻", labelVi: "AI Lập trình", labelEn: "Coding AI" },
  { slug: "finance", icon: "💰", labelVi: "AI Tài chính", labelEn: "Finance AI" },
  { slug: "study", icon: "📚", labelVi: "AI Học tập", labelEn: "Learning AI" }
];

// Bản sao "sạch" của bộ công cụ mặc định, chụp lại NGAY LÚC NÀY trước khi
// bất kỳ đoạn code nào khác (đồng bộ Firebase, Admin Panel...) có cơ hội
// chỉnh sửa mảng aiTools ở trên. Dùng cho nút "Nhập dữ liệu mặc định lên
// Firebase" trong Dashboard, để luôn nhập đúng dữ liệu gốc dù aiTools hiện
// tại đã bị thay thế bằng dữ liệu từ Firebase hay chưa.
const DEFAULT_TOOLS_SEED = aiTools.map(tool => JSON.parse(JSON.stringify(tool)));
