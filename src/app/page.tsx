import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import S from "@/styles/common.module.scss";
import TodoContainer from "@/components/todos/TodoContainer";

export default function Home() {
  return (
    <div className={S.layout}>
      <Header />
      <main className={S.main}>
        <TodoContainer />
      </main>
      <Footer />
    </div>
  );
}
