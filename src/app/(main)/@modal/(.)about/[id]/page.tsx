import Modal from "@/components/modal";
import AboutPage from "@/app/(main)/about/[id]/page";

type AboutPageProps = {
  params: Promise<{ id: string }>;
};

export default function Page(props: AboutPageProps) {
  return (
    <Modal>
      <AboutPage {...props} />
    </Modal>
  );
}
