(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [931],
  {
    2288: function (e, t, s) {
      (Promise.resolve().then(s.bind(s, 4640)),
        Promise.resolve().then(s.bind(s, 5e3)),
        Promise.resolve().then(s.bind(s, 7852)),
        Promise.resolve().then(s.bind(s, 6187)),
        Promise.resolve().then(s.bind(s, 5582)),
        Promise.resolve().then(s.bind(s, 8581)),
        Promise.resolve().then(s.bind(s, 5719)),
        Promise.resolve().then(s.bind(s, 5684)),
        Promise.resolve().then(s.bind(s, 4531)),
        Promise.resolve().then(s.bind(s, 6011)),
        Promise.resolve().then(s.t.bind(s, 703, 23)),
        Promise.resolve().then(s.t.bind(s, 4663, 23)),
        Promise.resolve().then(s.t.bind(s, 2350, 23)),
        Promise.resolve().then(s.bind(s, 5716)),
        Promise.resolve().then(s.bind(s, 9100)));
    },
    4640: function (e, t, s) {
      'use strict';
      s.d(t, {
        StickyBox: function () {
          return m;
        }
      });
      var n = s(8174),
        a = s(3192),
        i = s(6737),
        l = s(5719),
        r = s(6522),
        c = s(8462),
        o = s(5867),
        d = s(9700),
        u = s(9893),
        x = (e) => {
          var t;
          let { content: s, contentClassName: a } = e,
            i = (0, u.useRef)(null);
          (0, u.useRef)(null);
          let [l, x] = (0, u.useState)(0),
            { scrollYProgress: g } = (0, c.v)({ target: i, offset: ['0px 200px', 'end center'] });
          s.length;
          let m = [
            [0, 0.3],
            [0.31, 0.6],
            [0.61, 1]
          ];
          return (
            (0, o.W)(g, 'change', (e) => {
              for (let t = 0; t < m.length; t++)
                if (e >= m[t][0] && e < m[t][1]) {
                  x(t);
                  break;
                }
            }),
            (0, n.jsxs)(d.E.div, {
              ref: i,
              className: 'relative flex justify-between gap-16',
              children: [
                (0, n.jsx)('div', {
                  className: 'basis-2/5 space-y-24 py-20 ',
                  children: s.map((e, t) => {
                    var s;
                    return (0, n.jsxs)(
                      d.E.div,
                      {
                        className: 'flex gap-5',
                        initial: { opacity: 0.2 },
                        animate: { opacity: l === t ? 1 : 0.2 },
                        transition: { duration: 0.2 },
                        children: [
                          (0, n.jsx)('div', {
                            className:
                              'flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-lg bg-[#F4FCFF]',
                            children:
                              null !== (s = null == e ? void 0 : e.icon) && void 0 !== s ? s : null
                          }),
                          (0, n.jsxs)('div', {
                            className: 'flex flex-col gap-3',
                            children: [
                              (0, n.jsx)('h2', {
                                className: 'text-2xl font-bold',
                                children: e.title
                              }),
                              (0, n.jsx)('p', {
                                className: 'text-lg text-[#4E6185]',
                                children: e.description
                              })
                            ]
                          })
                        ]
                      },
                      e.title + t
                    );
                  })
                }),
                (0, n.jsx)('div', {
                  className: 'relative basis-1/2',
                  children: (0, n.jsx)('div', {
                    className: (0, r.cn)('sticky top-[200px] h-2/5 w-full', a),
                    children: null !== (t = s[l].content) && void 0 !== t ? t : null
                  })
                })
              ]
            })
          );
        };
      let g = [
        {
          title: '统一的云开发环境',
          description:
            '所有团队成员都可以访问同一个Devbox开发环境，共享代码存储库、配置文件和测试数据，开发过程无缝衔接。极大减少了对复杂环境协调的需求，加快开发过程，并提高团队生产力。',
          content: (0, n.jsx)('div', {
            className:
              'relative aspect-[700/450] w-full overflow-hidden rounded-lg bg-[#FAFCFF] shadow-sticky-box',
            children: (0, n.jsx)(a.default, {
              fill: !0,
              src: (0, r.K)('/images/sticky-box-1.svg'),
              alt: 'Version control',
              className: 'h-full w-full rounded-lg object-cover shadow-sticky-box'
            })
          }),
          icon: (0, n.jsx)(a.default, {
            src: (0, r.K)('/images/sticky-icon-1.svg'),
            alt: 'icon',
            width: 40,
            height: 40
          })
        },
        {
          title: '简化您的开发工作流程',
          description: '集成开发、测试和生产环境，自动化开发环境设置、与本地 IDE 无缝连接',
          content: (0, n.jsx)('div', {
            className:
              'relative aspect-[700/450] w-full overflow-hidden rounded-lg bg-[#FAFCFF] shadow-sticky-box',
            children: (0, n.jsx)(a.default, {
              fill: !0,
              src: (0, r.K)('/images/sticky-box-2.svg'),
              alt: 'Version control',
              className: 'h-full w-full rounded-lg object-cover shadow-sticky-box'
            })
          }),
          icon: (0, n.jsx)(a.default, {
            src: (0, r.K)('/images/sticky-icon-2.svg'),
            alt: 'icon',
            width: 40,
            height: 40
          })
        },
        {
          title: '使用 Devbox 进行持续交付',
          description:
            '只需输入版本号，Devbox 就会自动构建 Docker 镜像，100% 成功部署应用程序，并提供无缝的用户体验，无需任何 Docker 或 Kubernetes 知识。',
          content: (0, n.jsx)('div', {
            className:
              'relative aspect-[700/450] max-h-[400px] w-full rounded-lg bg-[#FAFCFF] shadow-sticky-box',
            children: (0, n.jsx)(a.default, {
              fill: !0,
              src: (0, r.K)('/images/sticky-box-3.svg'),
              alt: 'Version control',
              className: 'h-full w-full rounded-lg object-cover shadow-sticky-box'
            })
          }),
          icon: (0, n.jsx)(a.default, {
            src: (0, r.K)('/images/sticky-icon-3.svg'),
            alt: 'icon',
            width: 40,
            height: 40
          })
        }
      ];
      function m() {
        let e = (0, i.ac)({ minWidth: 1024 }),
          [t, s] = (0, u.useState)(!1);
        return (
          (0, u.useEffect)(() => {
            s(!0);
          }, []),
          (0, n.jsx)('div', {
            className: 'relative mt-32',
            children:
              e && t
                ? (0, n.jsx)(l.AnimateElement, {
                    type: 'slideUp',
                    children: (0, n.jsx)(x, { content: g })
                  })
                : (0, n.jsx)('div', {
                    className: 'space-y-16',
                    children: g.map((e, t) =>
                      (0, n.jsxs)(
                        l.AnimateElement,
                        {
                          type: 'slideUp',
                          className: 'flex flex-col gap-8',
                          children: [
                            (0, n.jsxs)('div', {
                              className: 'flex gap-8',
                              children: [
                                (0, n.jsx)('div', {
                                  className:
                                    'flex size-8 flex-shrink-0 items-start rounded-lg bg-[#F4FCFF] p-[6px] sm:size-14',
                                  children: e.icon
                                }),
                                (0, n.jsxs)('div', {
                                  children: [
                                    (0, n.jsx)('h2', {
                                      className: 'mb-4 text-sm font-bold sm:text-2xl',
                                      children: e.title
                                    }),
                                    (0, n.jsx)('div', {
                                      className: 'mb-4 text-xs text-[#4E6185] sm:text-[18px]',
                                      children: e.description
                                    })
                                  ]
                                })
                              ]
                            }),
                            e.content
                          ]
                        },
                        t
                      )
                    )
                  })
          })
        );
      }
    },
    5e3: function (e, t, s) {
      'use strict';
      s.d(t, {
        default: function () {
          return o;
        }
      });
      var n = s(8174),
        a = s(9893),
        i = s(5719),
        l = s(3192),
        r = s(6522);
      let c = {
        流行: [
          { name: 'Node.js', language: 'JavaScript', icon: '/icons/node.js.svg' },
          { name: 'Python', language: 'Python', icon: '/icons/python.svg' },
          { name: 'Ruby', language: 'Ruby', icon: '/icons/ruby.png' },
          { name: 'Java', language: 'Java', icon: '/icons/java.svg' },
          { name: 'Go', language: 'Go', icon: '/icons/go.svg' },
          { name: 'PHP', language: 'PHP', icon: '/icons/php.svg' }
        ],
        后端: [
          { name: 'Echo', language: 'JavaScript', icon: '/icons/echo.svg' },
          { name: 'Chi', language: 'JavaScript', icon: '/icons/chi.svg' },
          { name: 'Iris', language: 'TypeScript', icon: '/icons/iris.svg' },
          { name: 'Gin', language: 'Go', icon: '/icons/gin.svg' },
          { name: 'vert.x', language: 'Go', icon: '/icons/vert.x.svg' },
          { name: 'Spring Boot', language: 'Java', icon: '/icons/spring-boot.svg' },
          { name: 'Django', language: 'Python', icon: '/icons/django.svg' },
          { name: 'Flask', language: 'Python', icon: '/icons/flask.svg' },
          { name: 'Rocket', language: 'Rust', icon: '/icons/rocket.svg' },
          { name: 'Express.js', language: 'JavaScript', icon: '/icons/express.js.svg' }
        ],
        前端: [
          { name: 'Next.js', language: 'JavaScript', icon: '/icons/next.js.svg' },
          { name: 'React', language: 'JavaScript', icon: '/icons/react.svg' },
          { name: 'Vue', language: 'JavaScript', icon: '/icons/vue.svg' },
          { name: 'Angular', language: 'JavaScript', icon: '/icons/angular.svg' },
          { name: 'nuxt3', language: 'JavaScript', icon: '/icons/nuxt3.svg' },
          { name: 'Umi', language: 'JavaScript', icon: '/icons/umi.svg' },
          { name: 'SvelteKit', language: 'JavaScript', icon: '/icons/svelte.svg' }
        ],
        文档博客: [
          { name: 'Docusaurus', language: 'JavaScript', icon: '/icons/docusaurus.svg' },
          { name: 'VuePress', language: 'JavaScript', icon: '/icons/vuepress.svg' },
          { name: 'Gatsby', language: 'JavaScript', icon: '/icons/gatsby.svg' },
          { name: 'Hugo', language: 'Go', icon: '/icons/hugo.svg' },
          { name: 'Jekyll', language: 'Ruby', icon: '/icons/jekyll.png' },
          { name: 'Reveal.js', language: 'JavaScript', icon: '/icons/reveal.js.svg' }
        ],
        原生语言: [
          { name: 'C++', language: 'C++', icon: '/icons/c++.svg' },
          { name: 'Rust', language: 'Rust', icon: '/icons/rust.svg' },
          { name: 'Go', language: 'Go', icon: '/icons/go.svg' },
          { name: 'Java', language: 'Java', icon: '/icons/java.svg' },
          { name: 'C#', language: 'C#', icon: '/icons/csharp.svg' },
          { name: 'Kotlin', language: 'Kotlin', icon: '/icons/kotlin.svg' }
        ]
      };
      function o() {
        let [e, t] = (0, a.useState)('后端'),
          s = (0, a.useCallback)((e) => {
            t(e);
          }, []);
        return (0, n.jsx)('div', {
          className: 'mt-0 lg:mt-52',
          children: (0, n.jsxs)(i.AnimateElement, {
            type: 'slideUp',
            children: [
              (0, n.jsx)('div', {
                className: 'mb-6 text-center text-base font-bold text-black sm:mb-16 sm:text-4xl',
                children: '在几秒钟内启动可共享环境'
              }),
              (0, n.jsx)('div', {
                className:
                  'mb-9 flex flex-wrap justify-center gap-4 text-sm font-medium sm:text-base',
                children: Object.keys(c).map((t) =>
                  (0, n.jsx)(
                    'button',
                    {
                      className: 'rounded-md px-2 py-1 '.concat(
                        e === t
                          ? 'rounded-md bg-[#FAFCFF] text-black'
                          : 'text-custom-secondary-text hover:bg-[#FAFCFF]/80'
                      ),
                      style: {
                        boxShadow:
                          e === t
                            ? '0px 4px 4px 0px rgba(19, 51, 107, 0.05), 0px 0px 1px 0px rgba(19, 51, 107, 0.08)'
                            : ''
                      },
                      onClick: () => s(t),
                      children: t
                    },
                    t
                  )
                )
              }),
              (0, n.jsx)('div', {
                className: 'grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
                children: c[e].map((e) =>
                  (0, n.jsxs)(
                    'div',
                    {
                      className: 'flex gap-4 rounded-lg bg-white px-6 py-5',
                      style: {
                        boxShadow:
                          '0px 12px 40px -25px rgba(6, 26, 65, 0.20), 0px 0px 1px 0px rgba(19, 51, 107, 0.20)'
                      },
                      children: [
                        (0, n.jsx)('div', {
                          className:
                            'relative flex size-7 items-center justify-center text-4xl lg:size-10',
                          children: (0, n.jsx)(l.default, {
                            src: (0, r.K)(e.icon),
                            alt: e.name,
                            fill: !0,
                            className: 'size-7 lg:size-10'
                          })
                        }),
                        (0, n.jsx)('div', {
                          className: 'flex items-center justify-center',
                          children: (0, n.jsx)('h3', {
                            className: 'text-xs font-medium text-black lg:text-lg',
                            children: e.name
                          })
                        })
                      ]
                    },
                    e.name
                  )
                )
              }),
              (0, n.jsx)('div', {
                className: 'mt-14 flex justify-center',
                children: (0, n.jsx)('div', {
                  className:
                    'max-w-[760px] rounded-[46px] border border-solid border-[#ABE1FF] px-4 py-3 text-center text-xs font-medium text-custom-secondary-text md:text-sm',
                  style: {
                    background:
                      'linear-gradient(90deg, rgba(170, 229, 255, 0.30) 0%, rgba(170, 229, 255, 0.20) 100%)'
                  },
                  children:
                    '支持可以在 Linux 平台上运行的所有编程语言和框架，并支持快速安装不常用的编程语言'
                })
              })
            ]
          })
        });
      }
    },
    7852: function (e, t, s) {
      'use strict';
      s.d(t, {
        default: function () {
          return h;
        }
      });
      var n = s(8174),
        a = s(3192);
      a.default;
      let i = [
          { text: '首页', url: 'https://ads.sealos.run/' },
          { text: '定价', url: 'https://ads.sealos.run/Price' },
          { text: '文档', url: 'https://sealos.run/docs/Intro/' },
          {
            text: '商务咨询',
            url: 'https://fael3z0zfze.feishu.cn/share/base/form/shrcn5oHHTKCf3VREMKOhEy6fmf'
          }
        ],
        l = {
          name: 'Sealos',
          author: 'zjy365',
          description: 'sealos',
          keywords: ['sealos', 'Next.js'],
          url: { base: 'http://localhost:3000', author: '' },
          links: { github: '', twitter: '' },
          ogImage: ''.concat('http://localhost:3000', '/og.png?').concat(new Date().getTime())
        };
      var r = s(6522),
        c = s(8462),
        o = s(5867),
        d = s(9095),
        u = s(1255),
        x = s(5072),
        g = s(9893),
        m = s(4531);
      function h(e) {
        let { lang: t } = e,
          [s, h] = (0, g.useState)(!1),
          { scrollY: v } = (0, c.v)(),
          [p, f] = (0, g.useState)(!1);
        return (
          (0, o.W)(v, 'change', (e) => {
            f(e > 20);
          }),
          (0, n.jsx)('div', {
            className: (0, r.cn)('fixed top-0 z-50 w-full', p ? 'bg-[#EBF2FF] shadow-header' : ''),
            children: (0, n.jsx)('nav', {
              className: (0, r.cn)('custom-container-header relative text-black'),
              children: (0, n.jsxs)('div', {
                className: (0, r.cn)('flex w-full justify-between py-[10px]'),
                children: [
                  (0, n.jsxs)('div', {
                    className: 'flex items-center md:gap-x-9',
                    children: [
                      (0, n.jsxs)(d.Z, {
                        href: '/',
                        'aria-label': l.name,
                        title: l.name,
                        className: 'flex items-center gap-2 font-bold',
                        children: [
                          (0, n.jsx)(a.default, {
                            alt: l.name,
                            src: 'logo.svg',
                            className: 'h-7 w-7',
                            width: 28,
                            height: 28
                          }),
                          (0, n.jsx)('span', {
                            className: 'hidden text-xl font-bold md:block',
                            children: l.name
                          })
                        ]
                      }),
                      (0, n.jsx)('div', {
                        className: 'hidden items-center gap-x-5 text-sm font-medium lg:flex',
                        children:
                          (null == i ? void 0 : i.length) > 1 &&
                          i.map((e) =>
                            (0, n.jsx)(
                              d.Z,
                              {
                                href: e.url,
                                className: 'rounded-md px-2 py-1 hover:bg-[#0306070D]',
                                children: e.text
                              },
                              e.text
                            )
                          )
                      })
                    ]
                  }),
                  (0, n.jsx)('div', {
                    className: 'hidden items-center gap-4 text-sm font-medium lg:flex',
                    children: (0, n.jsx)(m.GetStartedButton, {})
                  }),
                  (0, n.jsxs)('div', {
                    className: 'lg:hidden',
                    children: [
                      (0, n.jsx)('button', {
                        'aria-label': 'Open Menu',
                        title: 'Open Menu',
                        className:
                          'focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50 -mr-1 rounded p-2 transition duration-200 focus:outline-none',
                        onClick: () => h(!0),
                        children: (0, n.jsx)(u.Z, {})
                      }),
                      s &&
                        (0, n.jsxs)(n.Fragment, {
                          children: [
                            (0, n.jsx)('div', {
                              className:
                                'fixed inset-0 z-40 bg-black/50 transition-opacity duration-300',
                              onClick: () => h(!1),
                              'aria-hidden': 'true'
                            }),
                            (0, n.jsx)('div', {
                              className: 'absolute left-0 top-0 z-50 w-full',
                              children: (0, n.jsxs)('div', {
                                className: 'bg-[#EBF2FF] px-4 py-3',
                                children: [
                                  (0, n.jsxs)('div', {
                                    className: 'mb-4 flex items-center justify-between',
                                    children: [
                                      (0, n.jsx)('div', {
                                        children: (0, n.jsxs)(d.Z, {
                                          href: '/',
                                          'aria-label': l.name,
                                          title: l.name,
                                          className: 'inline-flex items-center',
                                          children: [
                                            (0, n.jsx)(a.default, {
                                              alt: l.name,
                                              src: '/logo.svg',
                                              className: 'h-8 w-8',
                                              width: 32,
                                              height: 32
                                            }),
                                            (0, n.jsx)('span', {
                                              className:
                                                'ml-2 text-xl font-bold tracking-wide text-gray-950',
                                              children: l.name
                                            })
                                          ]
                                        })
                                      }),
                                      (0, n.jsx)('div', {
                                        children: (0, n.jsx)('button', {
                                          'aria-label': 'Close Menu',
                                          title: 'Close Menu',
                                          className:
                                            'font-norma tracking-wide transition-colors duration-200',
                                          onClick: () => h(!1),
                                          children: (0, n.jsx)(x.Z, {})
                                        })
                                      })
                                    ]
                                  }),
                                  (0, n.jsx)('div', {
                                    className: 'flex flex-col gap-y-2',
                                    children: i.map((e) =>
                                      (0, n.jsx)(
                                        d.Z,
                                        {
                                          href: e.url,
                                          className: 'rounded-md px-2 py-1 hover:bg-[#0306070D]',
                                          children: e.text
                                        },
                                        e.text
                                      )
                                    )
                                  })
                                ]
                              })
                            })
                          ]
                        })
                    ]
                  })
                ]
              })
            })
          })
        );
      }
    },
    6187: function (e, t, s) {
      'use strict';
      (s.r(t),
        s.d(t, {
          default: function () {
            return d;
          }
        }));
      var n = s(8174),
        a = s(6796),
        i = s.n(a),
        l = s(5719),
        r = s(9893),
        c = s(6522);
      let o = () =>
        (0, n.jsx)('svg', {
          xmlns: 'http://www.w3.org/2000/svg',
          width: '26',
          height: '26',
          viewBox: '0 0 36 40',
          fill: 'none',
          children: (0, n.jsx)('path', {
            d: 'M27.717 14.8729C30.711 16.5555 32.208 17.3967 32.7104 18.495C33.1486 19.453 33.1486 20.5469 32.7104 21.5049C32.208 22.6032 30.711 23.4445 27.717 25.127L17.4529 30.8949C14.4589 32.5774 12.9618 33.4186 11.7334 33.2929C10.662 33.1833 9.68858 32.6363 9.05532 31.788C8.32929 30.8153 8.32929 29.1328 8.32929 25.7679L8.32929 14.2321C8.32929 10.8671 8.32929 9.18458 9.05532 8.21195C9.68858 7.36358 10.662 6.8166 11.7334 6.70699C12.9618 6.58132 14.4589 7.42257 17.4529 9.10506L27.717 14.8729Z',
            fill: 'white',
            fillOpacity: '0.9'
          })
        });
      function d() {
        let [e, t] = (0, r.useState)(!1),
          s = (0, r.useRef)(null);
        return (
          (0, r.useEffect)(() => {
            if (s.current) {
              var e;
              null === (e = s.current.getInternalPlayer()) || void 0 === e || e.load();
            }
          }, []),
          (0, n.jsx)('div', {
            className: 'z-10 mt-10 flex items-center justify-center',
            children: (0, n.jsx)(l.AnimateElement, {
              type: 'slideUp',
              delay: 0.2,
              duration: 0.6,
              children: (0, n.jsx)(i(), {
                ref: s,
                url: 'https://objectstorageapi.usw.sailos.io/yzxbv756-sailos/sailos-devbox.mp4',
                className: 'max-w-[1046px]',
                width: '100%',
                height: '100%',
                playing: e,
                controls: e,
                light: (0, n.jsx)('img', {
                  src: (0, c.K)('/images/video-thumbnail.png'),
                  alt: 'video-thumbnail',
                  className: 'h-full w-full rounded-xl object-cover',
                  style: {
                    boxShadow:
                      '0px 32px 64px -20px rgba(0, 91, 129, 0.20), 0px 0px 1px 0px rgba(19, 51, 107, 0.20)'
                  }
                }),
                playIcon: (0, n.jsx)('div', {
                  className:
                    'absolute left-1/2 top-1/2 flex size-10 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-[#A9BBD7] hover:bg-[#9DB1D0]',
                  children: (0, n.jsx)(o, {})
                }),
                onClickPreview: () => {
                  var e;
                  (t(!0), null === (e = s.current) || void 0 === e || e.seekTo(0));
                },
                config: { file: { attributes: { preload: 'auto' } } }
              })
            })
          })
        );
      }
    },
    5582: function (e, t, s) {
      'use strict';
      function n() {
        return null;
      }
      (s.d(t, {
        TailwindIndicator: function () {
          return n;
        }
      }),
        s(8174));
    },
    8581: function (e, t, s) {
      'use strict';
      var n = s(8174),
        a = s(9893),
        i = s(9700),
        l = s(6522);
      t.default = function (e) {
        let {
            width: t = 40,
            height: s = 40,
            x: r = -1,
            y: c = -1,
            strokeDasharray: o = 0,
            numSquares: d = 50,
            className: u,
            maxOpacity: x = 0.5,
            duration: g = 4,
            repeatDelay: m = 0.5,
            ...h
          } = e,
          v = (0, a.useId)(),
          p = (0, a.useRef)(null),
          [f, b] = (0, a.useState)({ width: 0, height: 0 }),
          [j, y] = (0, a.useState)(() => w(d));
        function N() {
          return [
            Math.floor((Math.random() * f.width) / t),
            Math.floor((Math.random() * f.height) / s)
          ];
        }
        function w(e) {
          return Array.from({ length: e }, (e, t) => ({ id: t, pos: N() }));
        }
        let k = (e) => {
          y((t) => t.map((t) => (t.id === e ? { ...t, pos: N() } : t)));
        };
        return (
          (0, a.useEffect)(() => {
            f.width && f.height && y(w(d));
          }, [f, d]),
          (0, a.useEffect)(() => {
            let e = new ResizeObserver((e) => {
              for (let t of e) b({ width: t.contentRect.width, height: t.contentRect.height });
            });
            return (
              p.current && e.observe(p.current),
              () => {
                p.current && e.unobserve(p.current);
              }
            );
          }, [p]),
          (0, n.jsxs)('svg', {
            ref: p,
            'aria-hidden': 'true',
            className: (0, l.cn)(
              'pointer-events-none absolute inset-0 h-full w-full fill-gray-400/30 stroke-gray-400/30',
              u
            ),
            ...h,
            children: [
              (0, n.jsx)('defs', {
                children: (0, n.jsx)('pattern', {
                  id: v,
                  width: t,
                  height: s,
                  patternUnits: 'userSpaceOnUse',
                  x: r,
                  y: c,
                  children: (0, n.jsx)('path', {
                    d: 'M.5 '.concat(s, 'V.5H').concat(t),
                    fill: 'none',
                    strokeDasharray: o,
                    stroke: '#cce4f7'
                  })
                })
              }),
              (0, n.jsx)('rect', { width: '100%', height: '100%', fill: 'url(#'.concat(v, ')') }),
              (0, n.jsx)('svg', {
                x: r,
                y: c,
                className: 'overflow-visible',
                children: j.map((e, a) => {
                  let {
                    pos: [l, r],
                    id: c
                  } = e;
                  return (0, n.jsx)(
                    i.E.rect,
                    {
                      initial: { opacity: 0 },
                      animate: { opacity: x },
                      transition: { duration: g, repeat: 1, delay: 0.1 * a, repeatType: 'reverse' },
                      onAnimationComplete: () => k(c),
                      width: t - 1,
                      height: s - 1,
                      x: l * t + 1,
                      y: r * s + 1,
                      fill: '#A4E6FC',
                      strokeWidth: '0'
                    },
                    ''.concat(l, '-').concat(r, '-').concat(a)
                  );
                })
              })
            ]
          })
        );
      };
    },
    5719: function (e, t, s) {
      'use strict';
      (s.r(t),
        s.d(t, {
          AnimateElement: function () {
            return c;
          }
        }));
      var n = s(8174),
        a = s(3630),
        i = s(9700),
        l = s(9893);
      let r = {
          fadeIn: { opacity: [0, 1] },
          slideUp: { opacity: [0, 1], y: [50, 0] },
          scale: { scale: [0, 1] },
          rotate: { rotate: [-180, 0], opacity: [0, 1] }
        },
        c = (e) => {
          let { children: t, type: s, delay: c = 0.2, duration: o = 0.6, className: d } = e,
            u = (0, l.useRef)(null),
            x = (0, a.Y)(u);
          return (0, n.jsx)(i.E.div, {
            ref: u,
            initial: 'hidden',
            animate: x ? 'visible' : 'hidden',
            variants: {
              hidden: { opacity: 0, y: 50 },
              visible: {
                ...r[s],
                transition: { duration: o, delay: c, ease: [0.17, 0.55, 0.55, 1] }
              }
            },
            className: d,
            children: t
          });
        };
    },
    5684: function (e, t, s) {
      'use strict';
      s.d(t, {
        MagicCard: function () {
          return u;
        }
      });
      var n = s(9053),
        a = s(8174),
        i = s(9893),
        l = s(7883),
        r = s(9700),
        c = s(8234),
        o = s(6522);
      function d() {
        let e = (0, n._)([
          '\n            radial-gradient(',
          'px circle at ',
          'px ',
          'px, ',
          ', transparent 100%)\n          '
        ]);
        return (
          (d = function () {
            return e;
          }),
          e
        );
      }
      function u(e) {
        let {
            children: t,
            className: s,
            gradientSize: n = 200,
            gradientColor: u = '#262626',
            gradientOpacity: x = 0.8
          } = e,
          g = (0, l.c)(-n),
          m = (0, l.c)(-n),
          h = (0, i.useCallback)(
            (e) => {
              let { left: t, top: s } = e.currentTarget.getBoundingClientRect();
              (g.set(e.clientX - t), m.set(e.clientY - s));
            },
            [g, m]
          ),
          v = (0, i.useCallback)(() => {
            (g.set(-n), m.set(-n));
          }, [g, m, n]);
        return (
          (0, i.useEffect)(() => {
            (g.set(-n), m.set(-n));
          }, [g, m, n]),
          (0, a.jsxs)('div', {
            onMouseMove: h,
            onMouseLeave: v,
            className: (0, o.cn)(
              'group relative flex size-full overflow-hidden rounded-xl border bg-neutral-100 text-black',
              s
            ),
            children: [
              (0, a.jsx)('div', { className: 'relative z-10 size-full h-[350px]', children: t }),
              (0, a.jsx)(r.E.div, {
                className:
                  'pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100',
                style: { background: (0, c.Y)(d(), n, g, m, u), opacity: x }
              })
            ]
          })
        );
      }
    },
    4531: function (e, t, s) {
      'use strict';
      s.d(t, {
        GetStartedButton: function () {
          return l;
        }
      });
      var n = s(8174);
      s(9893);
      var a = s(9700),
        i = s(5790);
      let l = () =>
        (0, n.jsxs)('a', {
          href: 'https://cloud.sealos.run/',
          className:
            'relative flex cursor-pointer items-center justify-center gap-[6px] overflow-hidden rounded-md bg-custom-bg py-2 pl-4 pr-3 text-custom-primary-text shadow-button hover:bg-[#97D9FF] sm:pl-5 sm:pr-4',
          children: [
            (0, n.jsx)('div', { className: 'z-10', children: '立即开始' }),
            (0, n.jsx)(i.Z, { className: 'relative h-4 w-4' }),
            (0, n.jsx)(a.E.div, {
              className: 'absolute -top-1/2 left-0 h-[200%] w-[40px] bg-white/60',
              initial: { x: '-50px', skew: '-20deg' },
              animate: { x: '150px' },
              transition: { repeat: 1 / 0, duration: 1, ease: 'easeInOut', repeatDelay: 1 },
              style: { filter: 'blur(20px)' }
            })
          ]
        });
    },
    6011: function (e, t, s) {
      'use strict';
      s.d(t, {
        default: function () {
          return l;
        }
      });
      var n = s(8174),
        a = s(9893),
        i = s(6522);
      function l(e) {
        let { text: t, duration: s = 200, className: l } = e,
          [r, c] = (0, a.useState)(''),
          [o, d] = (0, a.useState)(0);
        return (
          (0, a.useEffect)(() => {
            let e = setInterval(() => {
              o < t.length ? (c(t.substring(0, o + 1)), d(o + 1)) : clearInterval(e);
            }, s);
            return () => {
              clearInterval(e);
            };
          }, [s, o]),
          (0, n.jsx)('h1', {
            className: (0, i.cn)(
              'font-display text-center text-4xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm',
              l
            ),
            children: r || t
          })
        );
      }
    },
    6522: function (e, t, s) {
      'use strict';
      s.d(t, {
        K: function () {
          return l;
        },
        cn: function () {
          return i;
        }
      });
      var n = s(213),
        a = s(9546);
      function i() {
        for (var e = arguments.length, t = Array(e), s = 0; s < e; s++) t[s] = arguments[s];
        return (0, a.m6)((0, n.W)(t));
      }
      let l = (e) => ''.concat('https://ads.sealos.run/app_store/tool/devbox').concat(e);
    }
  },
  function (e) {
    (e.O(0, [648, 567, 325, 744], function () {
      return e((e.s = 2288));
    }),
      (_N_E = e.O()));
  }
]);
