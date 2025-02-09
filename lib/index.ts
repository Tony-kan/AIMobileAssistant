import { icons, images } from "@/constants";

export const ai_models = [
  {
    id: "1",
    name: "ChatGPT",
    description:
      "OpenAI's ChatGPT is a large language model that can generate human-like text based on a given prompt or context.",
    icon: icons.chatgpt_icon,
    bg_color: "teal-400",
  },
  {
    id: "2",
    name: "DALL-E",
    description:
      "DALL-E is a large language model that can generate images based on a given prompt or context.",
    icon: icons.dalle_icon,
    bg_color: "purple-300",
  },
  {
    id: "3",
    name: "SMART AI",
    description:
      "SMART AI is a versatile artificial intelligence system designed for advanced reasoning, decision-making, and automation tasks.",
    icon: icons.smart_ai_icon,
    bg_color: "cyan-200",
  },
  {
    id: "4",
    name: "DEEPSEEK",
    description:
      "DEEPSEEK is a cutting-edge AI model optimized for deep learning research, complex problem-solving, and high-precision data analysis.",
    icon: icons.deepseek_icon,
    bg_color: "blue-300",
  },
];

export const dummyMessages = [
  {
    role: "user",
    content: "How are you ?",
  },
  {
    role: "assistant",
    content: "I'm fine , How may i help you today ?",
  },
  {
    role: "user",
    content: "create an image of a  dog playing with a cat",
  },
  {
    role: "assistant",
    // content: "https://storage.googleapis.com/pai-images/ae74b3002bfe4b538493ca7aedb6a300.jpeg",
    content:
      "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://media.easy-peasy.ai/14c3c243-b7f3-4e66-9e1e-feef79978cec/8a4c0c08-f9e2-4966-b924-c8679975f028.png",
  },
];
