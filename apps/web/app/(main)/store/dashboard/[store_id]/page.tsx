const Dashboard = async ({
    params,
  }: {
    params: Promise<{ storeId: string }>
  }) => {
  const { storeId } = await params;
  return (
    <div>
        {storeId}
    </div>
  )
}

export default Dashboard;