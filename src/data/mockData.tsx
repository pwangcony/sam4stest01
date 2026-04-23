import React from 'react';
import { Monitor, Tablet, Calculator } from 'lucide-react';

export const menuData = [
  {
    title: 'POS',
    icon: <Monitor className="w-5 h-5" />,
    models: [
      { 
        id: 'pos1', name: 'SAPPHIRE', desc: '프리미엄 디자인과 강력한 성능', img: '🖥️', 
        subItems: [
          { name: 'SAPH-660', price: '상세보기' },
          { name: 'SAPH-670', price: '상세보기' },
          { name: 'SAPH-560', price: '상세보기' },
          { name: 'SAPH-570', price: '상세보기' }
        ]
      },
      { 
        id: 'pos2', name: 'TITAN-S', desc: '최적의 안정성과 내구성', img: '⚙️',
        subItems: [
          { name: 'TITAN-S660', price: '상세보기' },
          { name: 'TITAN-S560', price: '상세보기' }
        ]
      }
    ]
  },
  {
    title: 'KIOSK',
    icon: <Tablet className="w-5 h-5" />,
    models: [
      { 
        id: 'kio1', name: 'ASTRA', desc: '모던하고 슬림한 키오스크', img: '📱',
        subItems: [
          { name: 'ASTRA-663', price: '상세보기' },
          { name: 'ASTRA-363', price: '상세보기' }
        ]
      },
      { 
        id: 'kio2', name: 'SK', desc: '다양한 매장 환경에 최적화', img: '🏪',
        subItems: [
          { name: 'SK-363', price: '상세보기' },
          { name: 'SK-663', price: '상세보기' }
        ]
      }
    ]
  },
  {
    title: 'ECR',
    icon: <Calculator className="w-5 h-5" />,
    models: [
      { 
        id: 'ecr1', name: 'ZETA', desc: '스마트 금전등록기', img: '🧮',
        subItems: [
          { name: 'ZETA-A50', price: '상세보기' }
        ]
      },
      { 
        id: 'ecr2', name: 'ER', desc: '컴팩트한 디자인과 실용성', img: '🧾',
        subItems: [
          { name: 'ER-180U', price: '상세보기' },
          { name: 'ER-230EJ', price: '상세보기' },
          { name: 'ER-260EJ', price: '상세보기' },
          { name: 'ER-900', price: '상세보기' }
        ]
      },
      { 
        id: 'ecr3', name: 'NR', desc: '고성능 영수증 프린터 탑재', img: '🖨️',
        subItems: [
          { name: 'NR-300', price: '상세보기' },
          { name: 'NR-400', price: '상세보기' },
          { name: 'NR-500', price: '상세보기' }
        ]
      },
      { 
        id: 'ecr4', name: 'SPS', desc: '유연한 시스템 확장성', img: '🔌',
        subItems: [
          { name: 'SPS-300', price: '상세보기' }
        ]
      },
      { 
        id: 'ecr5', name: 'SAP', desc: '안정적인 결제 솔루션', img: '💳',
        subItems: [
          { name: 'SAP-630', price: '상세보기' }
        ]
      }
    ]
  }
];

export const heroSlides = [
  {
    id: 1,
    badge: 'NEW POS SYSTEM',
    title: 'SAPPHIRE',
    subtitle: '매장의 품격을 높이는\n프리미엄 디자인',
    desc: '어느 매장에나 어울리는 우아한 곡선과 압도적인 퍼포먼스. 새로운 차원의 결제 환경을 경험해보세요.',
    img: '🖥️',
    gradient: 'from-blue-100 to-indigo-50',
    accent: 'text-gray-900',
    darkBg: 'bg-gradient-to-br from-gray-900 via-slate-800 to-black',
    fogColors: ['bg-blue-200/40', 'bg-indigo-200/40', 'bg-cyan-100/30']
  },
  {
    id: 2,
    badge: 'SMART KIOSK',
    title: 'ASTRA',
    subtitle: '스마트한 무인 주문의\n새로운 기준',
    desc: '초슬림 베젤과 직관적인 UI로 고객과 매장 모두에게 완벽한 사용성을 제공합니다.',
    img: '📱',
    gradient: 'from-purple-100 to-pink-50',
    accent: 'text-blue-600',
    darkBg: 'bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900',
    fogColors: ['bg-purple-200/40', 'bg-pink-200/40', 'bg-fuchsia-100/30']
  },
  {
    id: 3,
    badge: 'COMPACT ECR',
    title: 'ZETA',
    subtitle: '작지만 강력한\n차세대 금전등록기',
    desc: '컴팩트한 사이즈에 꼭 필요한 모든 기능을 담았습니다. 효율적인 매장 관리의 시작.',
    img: '🧮',
    gradient: 'from-emerald-100 to-teal-50',
    accent: 'text-teal-600',
    darkBg: 'bg-gradient-to-br from-teal-900 via-emerald-900 to-slate-900',
    fogColors: ['bg-emerald-200/40', 'bg-teal-200/40', 'bg-green-100/30']
  }
];
