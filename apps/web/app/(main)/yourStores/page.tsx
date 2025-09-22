import { getUsersStores } from "lib/store";

const YourStores = async ({ params }: { params: Promise<{ token: string }>}) => {
  //Get the user from localStorage, get user's stores, if no store is added route the user to /createStore.
  const { token } = await params;
  const stores = await getUsersStores(token);
  return (
    <div>
      Your stores
    </div>
  )
}

export default YourStores;