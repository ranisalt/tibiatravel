import type { Route } from "@/types"

export const routes: Route[] = [
  // boats
  { from: "ab'dendriel", to: "carlin", weight: 80, transport: "boat" },
  { from: "ab'dendriel", to: "edron", weight: 70, transport: "boat" },
  { from: "ab'dendriel", to: "thais", weight: 130, transport: "boat" },
  { from: "ab'dendriel", to: "venore", weight: 90, transport: "boat" },
  { from: "ankrahmun", to: "darashia", weight: 100, transport: "boat" },
  { from: "ankrahmun", to: "edron", weight: 160, transport: "boat" },
  { from: "ankrahmun", to: "liberty bay", weight: 90, transport: "boat" },
  { from: "ankrahmun", to: "port hope", weight: 80, transport: "boat" },
  { from: "ankrahmun", to: "venore", weight: 150, transport: "boat" },
  { from: "carlin", to: "ab'dendriel", weight: 80, transport: "boat" },
  { from: "carlin", to: "edron", weight: 110, transport: "boat" },
  { from: "carlin", to: "svargrond", weight: 110, transport: "boat" },
  { from: "carlin", to: "thais", weight: 110, transport: "boat" },
  { from: "carlin", to: "venore", weight: 130, transport: "boat" },
  { from: "cormaya", to: "edron", weight: 0, transport: "boat" },
  { from: "darashia", to: "ankrahmun", weight: 100, transport: "boat" },
  { from: "darashia", to: "issavi", weight: 130, transport: "boat" },
  { from: "darashia", to: "krailos", weight: 110, transport: "boat" },
  { from: "darashia", to: "liberty bay", weight: 200, transport: "boat" },
  { from: "darashia", to: "port hope", weight: 180, transport: "boat" },
  { from: "darashia", to: "venore", weight: 60, transport: "boat" },
  { from: "edron", to: "ab'dendriel", weight: 70, transport: "boat" },
  { from: "edron", to: "ankrahmun", weight: 160, transport: "boat" },
  { from: "edron", to: "carlin", weight: 110, transport: "boat" },
  { from: "edron", to: "cormaya", weight: 20, transport: "boat" },
  { from: "edron", to: "krailos", weight: 100, transport: "boat" },
  { from: "edron", to: "liberty bay", weight: 170, transport: "boat" },
  { from: "edron", to: "port hope", weight: 150, transport: "boat" },
  { from: "edron", to: "thais", weight: 160, transport: "boat" },
  { from: "edron", to: "venore", weight: 40, transport: "boat" },
  { from: "issavi", to: "darashia", weight: 80, transport: "boat" },
  { from: "issavi", to: "oramond", weight: 100, transport: "boat" },
  { from: "issavi", to: "venore", weight: 80, transport: "boat" },
  { from: "krailos", to: "darashia", weight: 110, transport: "boat" },
  { from: "krailos", to: "edron", weight: 100, transport: "boat" },
  { from: "krailos", to: "issavi", weight: 70, transport: "boat" },

  { from: "krailos", to: "venore", weight: 110, transport: "boat" },
  { from: "liberty bay", to: "ankrahmun", weight: 90, transport: "boat" },
  { from: "liberty bay", to: "darashia", weight: 200, transport: "boat" },
  { from: "liberty bay", to: "edron", weight: 170, transport: "boat" },
  { from: "liberty bay", to: "port hope", weight: 50, transport: "boat" },
  { from: "liberty bay", to: "thais", weight: 180, transport: "boat" },
  { from: "liberty bay", to: "venore", weight: 180, transport: "boat" },
  { from: "liberty bay", to: "yalahar", weight: 400, transport: "boat", extra: "Captain Max" },
  { from: "oramond", to: "issavi", weight: 120, transport: "boat" },
  { from: "oramond", to: "thais", weight: 150, transport: "boat" },
  { from: "port hope", to: "ankrahmun", weight: 110, transport: "boat" },
  { from: "port hope", to: "darashia", weight: 180, transport: "boat" },
  { from: "port hope", to: "edron", weight: 150, transport: "boat" },
  { from: "port hope", to: "liberty bay", weight: 50, transport: "boat" },

  { from: "port hope", to: "thais", weight: 160, transport: "boat" },
  { from: "port hope", to: "venore", weight: 160, transport: "boat" },
  { from: "roshamuul", to: "thais", weight: 210, transport: "boat" },
  { from: "svargrond", to: "carlin", weight: 110, transport: "boat" },
  { from: "svargrond", to: "thais", weight: 180, transport: "boat" },
  { from: "svargrond", to: "venore", weight: 150, transport: "boat" },
  { from: "thais", to: "ab'dendriel", weight: 130, transport: "boat" },
  { from: "thais", to: "carlin", weight: 110, transport: "boat" },
  { from: "thais", to: "edron", weight: 160, transport: "boat" },
  { from: "thais", to: "liberty bay", weight: 180, transport: "boat" },
  { from: "thais", to: "oramond", weight: 150, transport: "boat" },
  { from: "thais", to: "port hope", weight: 160, transport: "boat" },
  { from: "thais", to: "roshamuul", weight: 210, transport: "boat" },
  { from: "thais", to: "svargrond", weight: 180, transport: "boat" },
  { from: "thais", to: "venore", weight: 170, transport: "boat" },
  { from: "venore", to: "ab'dendriel", weight: 90, transport: "boat" },
  { from: "venore", to: "ankrahmun", weight: 150, transport: "boat" },
  { from: "venore", to: "carlin", weight: 130, transport: "boat" },
  { from: "venore", to: "darashia", weight: 60, transport: "boat" },
  { from: "venore", to: "edron", weight: 40, transport: "boat" },
  { from: "venore", to: "issavi", weight: 130, transport: "boat" },
  { from: "venore", to: "krailos", weight: 110, transport: "boat" },
  { from: "venore", to: "liberty bay", weight: 180, transport: "boat" },
  { from: "venore", to: "port hope", weight: 160, transport: "boat" },
  { from: "venore", to: "svargrond", weight: 150, transport: "boat" },
  { from: "venore", to: "thais", weight: 170, transport: "boat" },
  { from: "yalahar", to: "liberty bay", weight: 400, transport: "boat", extra: "Captain Cookie" },

  // carpet
  { from: "darashia", to: "edron", weight: 40, transport: "carpet" },
  { from: "darashia", to: "kazordoon", weight: 80, transport: "carpet" },
  { from: "darashia", to: "svargrond", weight: 60, transport: "carpet" },
  { from: "darashia", to: "issavi", weight: 100, transport: "carpet" },
  { from: "edron", to: "darashia", weight: 40, transport: "carpet" },
  { from: "edron", to: "kazordoon", weight: 70, transport: "carpet" },
  { from: "edron", to: "svargrond", weight: 60, transport: "carpet" },
  { from: "edron", to: "issavi", weight: 100, transport: "carpet" },
  { from: "svargrond", to: "darashia", weight: 60, transport: "carpet" },
  { from: "svargrond", to: "edron", weight: 60, transport: "carpet" },
  { from: "svargrond", to: "kazordoon", weight: 70, transport: "carpet" },
  { from: "svargrond", to: "issavi", weight: 100, transport: "carpet" },
  { from: "kazordoon", to: "darashia", weight: 40, transport: "carpet" },
  { from: "kazordoon", to: "edron", weight: 40, transport: "carpet" },
  { from: "kazordoon", to: "svargrond", weight: 60, transport: "carpet" },
  { from: "kazordoon", to: "issavi", weight: 100, transport: "carpet" },
  { from: "issavi", to: "darashia", weight: 40, transport: "carpet" },
  { from: "issavi", to: "edron", weight: 60, transport: "carpet" },
  { from: "issavi", to: "svargrond", weight: 60, transport: "carpet" },
  { from: "issavi", to: "kazordoon", weight: 70, transport: "carpet" },

  // steam ship
  { from: "cormaya", to: "farmine", weight: 200, transport: "steam ship" },
  { from: "cormaya", to: "kazordoon", weight: 160, transport: "steam ship" },
  { from: "farmine", to: "cormaya", weight: 100, transport: "steam ship" },
  { from: "farmine", to: "kazordoon", weight: 200, transport: "steam ship" },
  { from: "kazordoon", to: "cormaya", weight: 160, transport: "steam ship" },
  { from: "kazordoon", to: "farmine", weight: 200, transport: "steam ship" },

  // farmine magic carpet
  { from: "darashia", to: "farmine", weight: 60, transport: "carpet", conditions: ["farmine"] },
  { from: "edron", to: "farmine", weight: 60, transport: "carpet", conditions: ["farmine"] },
  { from: "farmine", to: "darashia", weight: 60, transport: "carpet", conditions: ["farmine"] },
  { from: "farmine", to: "edron", weight: 60, transport: "carpet", conditions: ["farmine"] },
  { from: "farmine", to: "kazordoon", weight: 70, transport: "carpet", conditions: ["farmine"] },
  { from: "farmine", to: "svargrond", weight: 60, transport: "carpet", conditions: ["farmine"] },
  { from: "farmine", to: "issavi", weight: 100, transport: "carpet", conditions: ["farmine"] },
  { from: "svargrond", to: "farmine", weight: 60, transport: "carpet", conditions: ["farmine"] },
  { from: "kazordoon", to: "farmine", weight: 60, transport: "carpet", conditions: ["farmine"] },
  { from: "issavi", to: "farmine", weight: 60, transport: "carpet", conditions: ["farmine"] },

  // gcts - these routes are never the cheapest
  // { from: "darashia", to: "edron", weight: 300, transport: "gcts", conditions: ["gcts"] },
  // { from: "darashia", to: "gnomegate", weight: 150, transport: "gcts", conditions: ["gcts"] },
  // { from: "darashia", to: "kazordoon", weight: 300, transport: "gcts", conditions: ["gcts"] },
  // { from: "darashia", to: "liberty bay", weight: 300, transport: "gcts", conditions: ["gcts"] },
  // { from: "darashia", to: "svargrond", weight: 300, transport: "gcts", conditions: ["gcts"] },
  // { from: "darashia", to: "thais", weight: 300, transport: "gcts", conditions: ["gcts"] },
  // { from: "edron", to: "darashia", weight: 300, transport: "gcts", conditions: ["gcts"] },
  // { from: "edron", to: "gnomegate", weight: 150, transport: "gcts", conditions: ["gcts"] },
  // { from: "edron", to: "kazordoon", weight: 300, transport: "gcts", conditions: ["gcts"] },
  // { from: "edron", to: "liberty bay", weight: 300, transport: "gcts", conditions: ["gcts"] },
  // { from: "edron", to: "svargrond", weight: 300, transport: "gcts", conditions: ["gcts"] },
  // { from: "edron", to: "thais", weight: 300, transport: "gcts", conditions: ["gcts"] },
  // { from: "gnomegate", to: "darashia", weight: 150, transport: "gcts", conditions: ["gcts"] },
  // { from: "gnomegate", to: "edron", weight: 150, transport: "gcts", conditions: ["gcts"] },
  // { from: "gnomegate", to: "kazordoon", weight: 150, transport: "gcts", conditions: ["gcts"] },
  // { from: "gnomegate", to: "liberty bay", weight: 150, transport: "gcts", conditions: ["gcts"] },
  // { from: "gnomegate", to: "svargrond", weight: 150, transport: "gcts", conditions: ["gcts"] },
  // { from: "gnomegate", to: "thais", weight: 150, transport: "gcts", conditions: ["gcts"] },
  // { from: "kazordoon", to: "darashia", weight: 300, transport: "gcts", conditions: ["gcts"] },
  // { from: "kazordoon", to: "edron", weight: 300, transport: "gcts", conditions: ["gcts"] },
  // { from: "kazordoon", to: "gnomegate", weight: 150, transport: "gcts", conditions: ["gcts"] },
  // { from: "kazordoon", to: "liberty bay", weight: 300, transport: "gcts", conditions: ["gcts"] },
  // { from: "kazordoon", to: "svargrond", weight: 300, transport: "gcts", conditions: ["gcts"] },
  // { from: "kazordoon", to: "thais", weight: 300, transport: "gcts", conditions: ["gcts"] },
  // { from: "liberty bay", to: "darashia", weight: 300, transport: "gcts", conditions: ["gcts"] },
  // { from: "liberty bay", to: "edron", weight: 300, transport: "gcts", conditions: ["gcts"] },
  // { from: "liberty bay", to: "gnomegate", weight: 150, transport: "gcts", conditions: ["gcts"] },
  // { from: "liberty bay", to: "kazordoon", weight: 300, transport: "gcts", conditions: ["gcts"] },
  // { from: "liberty bay", to: "svargrond", weight: 300, transport: "gcts", conditions: ["gcts"] },
  // { from: "liberty bay", to: "thais", weight: 300, transport: "gcts", conditions: ["gcts"] },
  // { from: "svargrond", to: "darashia", weight: 300, transport: "gcts", conditions: ["gcts"] },
  // { from: "svargrond", to: "edron", weight: 300, transport: "gcts", conditions: ["gcts"] },
  // { from: "svargrond", to: "gnomegate", weight: 150, transport: "gcts", conditions: ["gcts"] },
  // { from: "svargrond", to: "kazordoon", weight: 300, transport: "gcts", conditions: ["gcts"] },
  // { from: "svargrond", to: "liberty bay", weight: 300, transport: "gcts", conditions: ["gcts"] },
  // { from: "svargrond", to: "thais", weight: 300, transport: "gcts", conditions: ["gcts"] },
  // { from: "thais", to: "darashia", weight: 300, transport: "gcts", conditions: ["gcts"] },
  // { from: "thais", to: "edron", weight: 300, transport: "gcts", conditions: ["gcts"] },
  // { from: "thais", to: "gnomegate", weight: 150, transport: "gcts", conditions: ["gcts"] },
  // { from: "thais", to: "kazordoon", weight: 300, transport: "gcts", conditions: ["gcts"] },
  // { from: "thais", to: "liberty bay", weight: 300, transport: "gcts", conditions: ["gcts"] },
  // { from: "thais", to: "svargrond", weight: 300, transport: "gcts", conditions: ["gcts"] },

  // oramond
  { from: "edron", to: "oramond", weight: 110, transport: "boat", conditions: ["oramond"] },
  { from: "krailos", to: "oramond", weight: 60, transport: "boat", conditions: ["oramond"] },
  { from: "oramond", to: "edron", weight: 110, transport: "boat", conditions: ["oramond"] },
  { from: "oramond", to: "issavi", weight: 120, transport: "boat", conditions: ["oramond"] },
  { from: "oramond", to: "krailos", weight: 60, transport: "boat", conditions: ["oramond"] },
  { from: "oramond", to: "port hope", weight: 200, transport: "boat", conditions: ["oramond"] },
  { from: "oramond", to: "thais", weight: 150, transport: "boat", conditions: ["oramond"] },
  { from: "oramond", to: "venore", weight: 130, transport: "boat", conditions: ["oramond"] },
  { from: "port hope", to: "oramond", weight: 200, transport: "boat", conditions: ["oramond"] },
  { from: "venore", to: "oramond", weight: 130, transport: "boat", conditions: ["oramond"] },

  // walkable
  { from: "ab'dendriel", to: "carlin", weight: 0, transport: "walk", conditions: ["walk"] },
  { from: "ab'dendriel", to: "femor hills", weight: 0, transport: "walk", conditions: ["walk"] },
  { from: "ab'dendriel", to: "kazordoon", weight: 0, transport: "walk", conditions: ["walk"] },
  { from: "ab'dendriel", to: "thais", weight: 0, transport: "walk", conditions: ["walk"] },
  { from: "ab'dendriel", to: "venore", weight: 0, transport: "walk", conditions: ["walk"] },
  { from: "ankrahmun", to: "darashia", weight: 0, transport: "walk", conditions: ["walk"] },
  { from: "carlin", to: "ab'dendriel", weight: 0, transport: "walk", conditions: ["walk"] },
  { from: "carlin", to: "femor hills", weight: 0, transport: "walk", conditions: ["walk"] },
  { from: "carlin", to: "kazordoon", weight: 0, transport: "walk", conditions: ["walk"] },
  { from: "carlin", to: "thais", weight: 0, transport: "walk", conditions: ["walk"] },
  { from: "carlin", to: "venore", weight: 0, transport: "walk", conditions: ["walk"] },
  { from: "cormaya", to: "edron", weight: 0, transport: "walk", conditions: ["walk"] },
  { from: "darashia", to: "ankrahmun", weight: 0, transport: "walk", conditions: ["walk"] },
  { from: "edron", to: "cormaya", weight: 0, transport: "walk", conditions: ["walk"] },
  { from: "femor hills", to: "ab'dendriel", weight: 0, transport: "walk", conditions: ["walk"] },
  { from: "femor hills", to: "carlin", weight: 0, transport: "walk", conditions: ["walk"] },
  { from: "femor hills", to: "kazordoon", weight: 0, transport: "walk", conditions: ["walk"] },
  { from: "femor hills", to: "thais", weight: 0, transport: "walk", conditions: ["walk"] },
  { from: "femor hills", to: "venore", weight: 0, transport: "walk", conditions: ["walk"] },
  { from: "kazordoon", to: "ab'dendriel", weight: 0, transport: "walk", conditions: ["walk"] },
  { from: "kazordoon", to: "carlin", weight: 0, transport: "walk", conditions: ["walk"] },
  { from: "kazordoon", to: "femor hills", weight: 0, transport: "walk", conditions: ["walk"] },
  { from: "kazordoon", to: "thais", weight: 0, transport: "walk", conditions: ["walk"] },
  { from: "kazordoon", to: "venore", weight: 0, transport: "walk", conditions: ["walk"] },
  { from: "thais", to: "ab'dendriel", weight: 0, transport: "walk", conditions: ["walk"] },
  { from: "thais", to: "carlin", weight: 0, transport: "walk", conditions: ["walk"] },
  { from: "thais", to: "femor hills", weight: 0, transport: "walk", conditions: ["walk"] },
  { from: "thais", to: "kazordoon", weight: 0, transport: "walk", conditions: ["walk"] },
  { from: "thais", to: "venore", weight: 0, transport: "walk", conditions: ["walk"] },
  { from: "venore", to: "ab'dendriel", weight: 0, transport: "walk", conditions: ["walk"] },
  { from: "venore", to: "carlin", weight: 0, transport: "walk", conditions: ["walk"] },
  { from: "venore", to: "femor hills", weight: 0, transport: "walk", conditions: ["walk"] },
  { from: "venore", to: "kazordoon", weight: 0, transport: "walk", conditions: ["walk"] },
  { from: "venore", to: "thais", weight: 0, transport: "walk", conditions: ["walk"] },

  // carpet routes for femor hills only make sense if you allow walking
  { from: "darashia", to: "femor hills", weight: 60, transport: "carpet", conditions: ["walk"] },
  { from: "edron", to: "femor hills", weight: 60, transport: "carpet", conditions: ["walk"] },
  { from: "farmine", to: "femor hills", weight: 60, transport: "carpet", conditions: ["walk", "farmine"] },
  { from: "femor hills", to: "darashia", weight: 60, transport: "carpet", conditions: ["walk"] },
  { from: "femor hills", to: "edron", weight: 60, transport: "carpet", conditions: ["walk"] },
  { from: "femor hills", to: "farmine", weight: 60, transport: "carpet", conditions: ["farmine", "walk"] },
  { from: "femor hills", to: "issavi", weight: 100, transport: "carpet", conditions: ["walk"] },
  { from: "femor hills", to: "kazordoon", weight: 70, transport: "carpet", conditions: ["walk"] },
  { from: "issavi", to: "femor hills", weight: 100, transport: "carpet", conditions: ["walk"] },
  { from: "kazordoon", to: "femor hills", weight: 60, transport: "carpet", conditions: ["walk"] },
  { from: "svargrond", to: "femor hills", weight: 60, transport: "carpet", conditions: ["walk"] },

  // yalahar
  { from: "ab'dendriel", to: "yalahar", weight: 160, transport: "boat", conditions: ["yalahar"] },
  { from: "ankrahmun", to: "yalahar", weight: 230, transport: "boat", conditions: ["yalahar"] },
  { from: "carlin", to: "yalahar", weight: 185, transport: "boat", conditions: ["yalahar"] },
  { from: "darashia", to: "yalahar", weight: 210, transport: "boat", conditions: ["yalahar"] },
  { from: "issavi", to: "yalahar", weight: 80, transport: "boat", conditions: ["yalahar"] },
  { from: "liberty bay", to: "yalahar", weight: 260, transport: "boat", conditions: ["yalahar"] },
  { from: "port hope", to: "yalahar", weight: 260, transport: "boat", conditions: ["yalahar"] },
  { from: "thais", to: "yalahar", weight: 200, transport: "boat", conditions: ["yalahar"] },
  { from: "venore", to: "yalahar", weight: 185, transport: "boat", conditions: ["yalahar"] },
  { from: "yalahar", to: "ab'dendriel", weight: 160, transport: "boat", conditions: ["yalahar"] },
  { from: "yalahar", to: "ankrahmun", weight: 230, transport: "boat", conditions: ["yalahar"] },
  { from: "yalahar", to: "carlin", weight: 185, transport: "boat", conditions: ["yalahar"] },
  { from: "yalahar", to: "darashia", weight: 210, transport: "boat", conditions: ["yalahar"] },
  { from: "yalahar", to: "liberty bay", weight: 275, transport: "boat", conditions: ["yalahar"] },
  { from: "yalahar", to: "port hope", weight: 260, transport: "boat", conditions: ["yalahar"] },
  { from: "yalahar", to: "thais", weight: 200, transport: "boat", conditions: ["yalahar"] },
  { from: "yalahar", to: "venore", weight: 185, transport: "boat", conditions: ["yalahar"] },
]
