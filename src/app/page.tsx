import Container from "@/app/_components/container";
import Banner from "@/app/_components/banner";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";

export default function Index() {
  const allPosts = getAllPosts();

  return (
    <main>
      <Container>
        <Intro />
        <div className="mb-8 md:mb-16">
          <Banner title={'RGB RUN Entertainment'} src={'/assets/rgbrun/banner/cover.jpg'} />
        </div>
        {allPosts.length > 0 && <MoreStories posts={allPosts} />}
      </Container>
    </main>
  );
}
