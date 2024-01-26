export default function AdminPanel() {
  return (
    <>
      <div className="w-2/4">
        <div className="text-2xl text-center mb-8">Admin Panel</div>
        <div className="border border-gray-300 p-8 rounded-xl">
          <div
            className="p-4 text-sm text-green-800 rounded-lg bg-green-50"
            role="alert"
          >
            <span className="font-medium">Success alert!</span>
            {"You're logged in!."}
          </div>
        </div>
      </div>
    </>
  );
}
