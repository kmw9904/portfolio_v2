import Modal from "@/components/modal";
import ProjectPage from "@/app/(main)/project/[id]/page";

type ProjectPageProps = {
  params: Promise<{ id: string }>;
};

export default function Page(props: ProjectPageProps) {
  return (
    <Modal>
      <ProjectPage {...props} />
    </Modal>
  );
}
