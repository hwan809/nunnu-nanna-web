import type { Metadata } from "next";
import ExerciseApp from "@/components/ExerciseApp";

export const metadata: Metadata = {
  title: "20초 눈 운동",
  description:
    "위아래 보기, 좌우 보기, 원 그리기, 깜빡이기. 움직이는 눈누를 따라 딱 20초, 눈의 피로를 풀어보세요.",
};

export default function ExercisePage() {
  return <ExerciseApp />;
}
