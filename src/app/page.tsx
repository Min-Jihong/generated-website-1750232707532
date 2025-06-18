
export default function 메인페이지Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          메인 페이지
        </h1>
        <p className="text-lg text-gray-600">
          홈페이지
        </p>
        
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* 기능 카드들 */}
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">기본 레이아웃</h3>
            <p className="text-gray-600">
              기본 레이아웃에 대한 설명입니다.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">네비게이션</h3>
            <p className="text-gray-600">
              네비게이션에 대한 설명입니다.
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
}