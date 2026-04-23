import React from 'react';
import { HeaderSlideDrillDown } from './components/layout/HeaderSlideDrillDown';
import { HeaderConcept2 } from './components/layout/HeaderConcept2';
import { HeaderConcept3 } from './components/layout/HeaderConcept3';
import { HeroConcept1 } from './components/hero/HeroConcept1';
import { HeroConcept2 } from './components/hero/HeroConcept2';
import { HeroConcept3 } from './components/hero/HeroConcept3';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 pb-32 overflow-x-hidden">
      <div className="text-center py-12 bg-white border-b border-gray-100 relative z-10">
        <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
          SAM4S의 POS, KIOSK, ECR 라인업을 위한 최신 트렌드 디자인 가이드입니다.
        </p>
      </div>

      <div className="space-y-32 mt-16">
        <section>
          <div className="max-w-7xl mx-auto px-6 mb-6">
            <h2 className="text-xl font-bold text-gray-900">Concept 1. Minimal Split Screen</h2>
            <p className="text-sm text-gray-500 mt-1">Apple 스타일의 깔끔한 여백과 드릴다운(Drill-down) 헤더 메뉴가 결합되었습니다.</p>
          </div>
          <div className="relative border-y border-gray-200 bg-white">
            <HeaderSlideDrillDown />
            <HeroConcept1 />
          </div>
        </section>

        <section>
          <div className="max-w-7xl mx-auto px-6 mb-6">
            <h2 className="text-xl font-bold text-gray-900">Concept 2. Premium Dark Glassmorphism</h2>
            <p className="text-sm text-gray-500 mt-1">다크 테마의 와이드 메가 메뉴와 프리미엄 크로스페이드 히어로가 결합되었습니다.</p>
          </div>
          <div className="relative border-y border-gray-800 bg-black overflow-hidden">
            <HeaderConcept2 />
            <HeroConcept2 />
          </div>
        </section>

        <section className="pt-6">
          <div className="max-w-7xl mx-auto px-6 mb-12">
            <h2 className="text-xl font-bold text-gray-900">Concept 3. Modern Bento Grid & Floating Header</h2>
            <p className="text-sm text-gray-500 mt-1">플로팅 형태의 글래스모피즘 헤더와 벤토 그리드 레이아웃이 결합되었습니다.</p>
          </div>
          <div className="relative">
            <HeaderConcept3 />
            <div className="border-y border-gray-200 bg-slate-50">
              <HeroConcept3 />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
