# Graph Report - actual_sistema_envios  (2026-10-25)

## Corpus Check
- 254 files · ~255,079 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 23 file(s) not represented in the graph (top: .ttf 12, .css 9, (none) 2)

## Summary
- 635 nodes · 904 edges · 129 communities (35 shown, 94 thin omitted)
- Extraction: 76% EXTRACTED · 24% INFERRED · 0% AMBIGUOUS · INFERRED: 213 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Design System Tokens
- Skill Documentation
- UI Components
- Site Pages
- Guidelines
- Code Components
- Community 6
- Community 7
- Community 8
- Community 9
- Community 10
- Community 11
- Community 12
- Community 13
- Community 14
- Community 15
- Community 16
- Community 17
- Community 18
- Community 19
- Community 20
- Community 21
- Community 22
- Community 23
- Community 24
- Community 25
- Community 26
- Community 27
- Community 28
- Community 29
- Community 30
- Community 31
- Community 32
- Community 33
- Community 34
- Community 35
- Community 36
- Community 37
- Community 38
- Community 39
- Community 40
- Community 41
- Community 42
- Community 43
- Community 44
- Community 45
- Community 46
- Community 47
- Community 48
- Community 49
- Community 50
- Community 51
- Community 52
- Community 53
- Community 54
- Community 55
- Community 56
- Community 57
- Community 58
- Community 60
- Community 61
- Community 63
- Community 64
- Community 65
- Community 67
- Community 68
- Community 70
- Community 73
- Community 74
- Community 75
- Community 76
- Community 77
- Community 78
- Community 79
- Community 85
- Community 86
- Community 87
- Community 88
- Community 89
- Community 90
- Community 91
- Community 92
- Community 93
- Community 94
- Community 95
- Community 96
- Community 97
- Community 98
- Community 99
- Community 100
- Community 101
- Community 102
- Community 103
- Community 104
- Community 105
- Community 106
- Community 107
- Community 108
- Community 109
- Community 110
- Community 111
- Community 112
- Community 113
- Community 114
- Community 115
- Community 116
- Community 117
- Community 118
- Community 119
- Community 120
- Community 121
- Community 122
- Community 123
- Community 124
- Community 125
- Community 126
- Community 127
- Community 128

## God Nodes (most connected - your core abstractions)
1. `EmprendedoresScreen()` - 18 edges
2. `HomeScreen()` - 18 edges
3. `ServicioScreen()` - 17 edges
4. `ContrareembolsoScreen()` - 16 edges
5. `EmpresasScreen()` - 16 edges
6. `createRuntime()` - 15 edges
7. `Button()` - 14 edges
8. `ContactoScreen()` - 14 edges
9. `FaqScreen()` - 14 edges
10. `NosotrosScreen()` - 14 edges

## Surprising Connections (you probably didn't know these)
- `QuantityStepper()` --indirect_call--> `Ic()`  [INFERRED]
  _ds_bundle.js → components/blocks/QuantityStepper.jsx
- `Button()` --indirect_call--> `ArrowRight()`  [INFERRED]
  _ds_bundle.js → components/core/Button.jsx
- `Button()` --indirect_call--> `ArrowUpRight()`  [INFERRED]
  _ds_bundle.js → components/core/Button.jsx
- `Button()` --indirect_call--> `Spinner()`  [INFERRED]
  _ds_bundle.js → components/core/Button.jsx
- `ReviewCard()` --indirect_call--> `Star()`  [INFERRED]
  _ds_bundle.js → components/data/ReviewCard.jsx

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **UI Component Skills Ecosystem** — _agents_skills_shadcn_ui_readme_overview, _agents_skills_shadcn_ui_skill_skill, _agents_skills_shadcn_ui_resources_component_catalog_catalog [INFERRED 0.85]
- **Shadcn Customization Flow** — _agents_skills_shadcn_ui_resources_customization_guide_theming_approach, _agents_skills_shadcn_ui_resources_customization_guide_color_customization, _agents_skills_shadcn_ui_resources_customization_guide_component_customization [INFERRED 0.75]
- **Frontend Design and Extraction Workflow** — _agents_skills_stitch_extract_design_md_references_svelte_svelte_extraction_patterns, _agents_skills_stitch_extract_design_md_references_vue_vue_nuxt_extraction_patterns, _agents_skills_stitch_extract_static_html_skill_extract_static_html, _agents_skills_stitch_generate_design_skill_generate_design [INFERRED 0.85]

## Communities (129 total, 94 thin omitted)

### Community 0 - "Design System Tokens"
Cohesion: 0.05
Nodes (73): boot(), bundledBlob(), cdnScriptFor(), collectProps(), compileAttr(), compileTemplate(), contentKey(), createComponentFactory() (+65 more)

### Community 1 - "Skill Documentation"
Cohesion: 0.14
Nodes (45): Accordion(), Badge(), BezelCard(), Button(), ContactoScreen(), ContactRow(), ContrareembolsoScreen(), CopyField() (+37 more)

### Community 2 - "UI Components"
Cohesion: 0.09
Nodes (32): AllStats, autoDetectTailwind(), buildHead(), camelToKebab(), createLimiter(), CssUrlRef, embedImages(), escapeRegExp() (+24 more)

### Community 3 - "Site Pages"
Cohesion: 0.05
Nodes (14): CtaBannerProps, LeadProps, PageHeroProps, QuantityStepperProps, SocialCardProps, StatListProps, BadgeProps, BezelCardProps (+6 more)

### Community 4 - "Guidelines"
Cohesion: 0.09
Nodes (19): AllStats, CssUrlRef, extractCssUrls(), FileStats, getMime(), inlineImages(), InlineStats, isLocalPath() (+11 more)

### Community 5 - "Code Components"
Cohesion: 0.14
Nodes (5): build_screen_request(), call_batch_create_screens(), encode_file(), main(), parse_args()

### Community 6 - "Community 6"
Cohesion: 0.11
Nodes (7): AuthLayout(), columns, data, User, formSchema, FormValues, UserProfileForm()

### Community 7 - "Community 7"
Cohesion: 0.24
Nodes (11): SkipLink(), SocialCard(), Badge(), TONES, ArrowRight(), ArrowUpRight(), Button(), SIZES (+3 more)

### Community 8 - "Community 8"
Cohesion: 0.14
Nodes (13): Alpine Peak Design System Example, Angular Extraction Patterns, Plain CSS SASS Less Extraction Patterns, React Next.js Tailwind Extraction Patterns, Color Palette & Roles, Component Stylings, Deep Extraction Phase, Extract Design System from Frontend Code (+5 more)

### Community 9 - "Community 9"
Cohesion: 0.14
Nodes (14): Contacto Page, Home Page, Nosotros Nuestras Redes Page, Preguntas Frecuentes Page, Sobre Nosotros Page, Deposito y Fulfillment Page, Empresas Cuenta Corriente Page, Envios Contrareembolso Page (+6 more)

### Community 10 - "Community 10"
Cohesion: 0.17
Nodes (12): dependencies, @swc/core@^1.3.100, description, engines, node, @swc/core, name, scripts (+4 more)

### Community 11 - "Community 11"
Cohesion: 0.17
Nodes (12): dependencies, @swc/core@^1.3.100, description, engines, node, @swc/core, name, scripts (+4 more)

### Community 12 - "Community 12"
Cohesion: 0.20
Nodes (3): calculateDuration(), RemotionRoot(), ScreenSlideProps

### Community 13 - "Community 13"
Cohesion: 0.20
Nodes (4): ActivityCardProps, styles, StitchComponentProps, styles

### Community 14 - "Community 14"
Cohesion: 0.47
Nodes (4): CtaBanner(), Display(), Lead(), SectionHead()

### Community 15 - "Community 15"
Cohesion: 0.29
Nodes (7): CHEV, CLOSE, DEFAULT_NAV, MENU, P(), PHONE, SiteHeader()

### Community 16 - "Community 16"
Cohesion: 0.60
Nodes (3): Steps(), BezelCard(), FeatureCard()

### Community 17 - "Community 17"
Cohesion: 0.33
Nodes (6): Documentación del Sistema de Diseño: Envíos DosRuedas, Ley de Tres Colores, Inventario de Páginas y Rutas: Envíos DosRuedas, Portada Card, Marca Card, Contrastes verificados Card

### Community 19 - "Community 19"
Cohesion: 0.40
Nodes (5): DIFS, HomeScreen(), REVIEWS, SERVICES, ServicesCarousel()

### Community 20 - "Community 20"
Cohesion: 0.33
Nodes (4): ADV, HITOS, TEAM, VALUES

### Community 21 - "Community 21"
Cohesion: 0.50
Nodes (4): FOOTER_SERVICES, I, P(), SiteFooter()

### Community 22 - "Community 22"
Cohesion: 0.50
Nodes (4): CSS Custom Properties Strategy, Svelte Component Style Patterns, Svelte Extraction Patterns, SvelteKit Layout Patterns

### Community 23 - "Community 23"
Cohesion: 0.50
Nodes (4): Prompt Enhancement Example, Generate Design, Generate from Text Flow, Prompt Enhancement Pipeline

### Community 24 - "Community 24"
Cohesion: 0.50
Nodes (4): Design Mappings, Project Vision and Constitution, Stitch Build Loop README, Stitch Build Loop Skill

### Community 25 - "Community 25"
Cohesion: 0.50
Nodes (4): Furniture Collections List Design System, Semantic Design System, Stitch DESIGN.md Skill, Stitch MCP Server

### Community 26 - "Community 26"
Cohesion: 0.50
Nodes (4): Enhance Prompt Skill README, UI/UX Keywords Reference, Prompt Enhancement Pipeline, Stitch Prompt Engineer Skill

### Community 28 - "Community 28"
Cohesion: 0.50
Nodes (4): Architectural Rules and Modular Components, Retrieval and Networking Phase, Stitch to React Components Workflow, Style Extraction Phase

### Community 29 - "Community 29"
Cohesion: 0.67
Nodes (3): shadcn/ui Integration README, shadcn/ui Component Catalog, shadcn/ui Skill Core Instructions

### Community 30 - "Community 30"
Cohesion: 0.67
Nodes (3): Color Customization, Dark Mode, Theming Approach

### Community 31 - "Community 31"
Cohesion: 0.67
Nodes (3): Chakra UI Migration, Material-UI Migration, Migration Strategies

### Community 32 - "Community 32"
Cohesion: 0.67
Nodes (3): Single File Component Patterns, Vue Nuxt Extraction Patterns, Vuetify Theme Extraction

### Community 33 - "Community 33"
Cohesion: 0.67
Nodes (3): Extract Static HTML, Strategy A Puppeteer Snapshot, Strategy B Browser Subagent Capture

### Community 34 - "Community 34"
Cohesion: 0.67
Nodes (3): Agent Skills Open Standard, Stitch Engineering Pipeline, Stitch to React Components

### Community 35 - "Community 35"
Cohesion: 0.67
Nodes (3): Architecture Quality Gate, Structural Integrity Gate, Type Safety and Syntax Gate

### Community 42 - "Community 42"
Cohesion: 0.67
Nodes (3): Imágenes Card, Prompts de imagen · Envíos DosRuedas, Modern 3D Isometric Miniature Diorama Render

## Knowledge Gaps
- **125 isolated node(s):** `Design MD Skill README`, `Stitch Design System`, `Semantic Design System`, `Stitch MCP Server`, `Furniture Collections List Design System` (+120 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 321 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **94 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Button()` connect `Skill Documentation` to `Community 7`?**
  _High betweenness centrality (0.036) - this node is a cross-community bridge._
- **Are the 17 inferred relationships involving `EmprendedoresScreen()` (e.g. with `Badge()` and `BezelCard()`) actually correct?**
  _`EmprendedoresScreen()` has 17 INFERRED edges - model-reasoned connections that need verification._
- **What connects `Design MD Skill README`, `Stitch Design System`, `Semantic Design System` to the rest of the system?**
  _125 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Design System Tokens` be split into smaller, more focused modules?**
  _Cohesion score 0.05025394279604384 - nodes in this community are weakly interconnected._
- **Why does `ArrowRight()` connect `Community 7` to `Skill Documentation`?**
  _High betweenness centrality (0.012) - this node is a cross-community bridge._
- **Are the 17 inferred relationships involving `HomeScreen()` (e.g. with `Badge()` and `Button()`) actually correct?**
  _`HomeScreen()` has 17 INFERRED edges - model-reasoned connections that need verification._
- **Should `Skill Documentation` be split into smaller, more focused modules?**
  _Cohesion score 0.14223512336719885 - nodes in this community are weakly interconnected._