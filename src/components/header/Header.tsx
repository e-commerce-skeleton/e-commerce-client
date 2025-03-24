import {
  FilledCartIcon,
  FilledFavoriteIcon,
  FilledUserIcon,
  OutlineCartIcon,
  OutlineFavoriteIcon,
  OutlineUserIcon,
} from "../icons/Icon";

function UserIcon() {
  return (
    <>
      <div className="group lg:pl-2 lg:pr-2">
        <div className="block group-hover:hidden transition-all">
          <OutlineUserIcon />
        </div>
        <div className="hidden group-hover:block transition-all">
          <FilledUserIcon />
        </div>
      </div>
    </>
  );
}

function FavoriteIcon() {
  return (
    <>
      <div className="group lg:pl-2 lg:pr-2">
        <div className="block group-hover:hidden transition-all">
          <OutlineFavoriteIcon />
        </div>
        <div className="hidden group-hover:block transition-all">
          <FilledFavoriteIcon />
        </div>
      </div>
    </>
  );
}

function CartIcon() {
  return (
    <>
      <div className="group lg:pl-2 lg:pr-2">
        <div className="block group-hover:hidden transition-all">
          <OutlineCartIcon />
        </div>
        <div className="hidden group-hover:block transition-all">
          <FilledCartIcon />
        </div>
      </div>
    </>
  );
}

export default function Header() {
  return (
    <>
      <div className="fixed top-0 left-0 w-screen flex flex-col items-center justify-center bg-red-500 p-2 lg:flex-row lg:justify-between">
        <h1 className="text-3xl font-extrabold">e-commerce</h1>
        <div className="w-full flex flex-row items-center justify-around lg:w-auto lg:justify-end">
          <UserIcon />
          <FavoriteIcon />
          <CartIcon />
        </div>
      </div>
    </>
  );
}
