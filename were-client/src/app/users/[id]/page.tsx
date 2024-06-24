import UserPageTemplate from '@/components/template/UserPageTemplate';
import { getUserDetail } from '@/service/user';
import { redirect } from 'next/navigation';

const UserPage = async ({ params }: { params: { id: number } }) => {
  const userData = await getUserDetail(params.id);

  if (userData.isMine) {
    redirect('/my');
  }

  return <UserPageTemplate user={userData} />;
};

export default UserPage;
