import fs from "fs";
import { KarabinerRules } from "./types";
import { createHyperSubLayers, app, open, window, shell } from "./utils";

const rules: KarabinerRules[] = [
  // MX3 Mouse Button Rule (device specific)
  {
    description: "Map MX3 Button 5 to Option+Space",
    manipulators: [
      {
        conditions: [
          {
            identifiers: [
              {
                product_id: 45108,
                vendor_id: 1133,
              },
            ],
            type: "device_if",
          },
        ],
        from: { pointing_button: "button5" },
        to: [
          {
            key_code: "spacebar",
            modifiers: ["left_option"],
          },
        ],
        type: "basic",
      },
    ],
  },

  // Define the Hyper key itself
  {
    description: "Hyper Key (⌃⌥⇧⌘)",
    manipulators: [
      {
        description: "Caps Lock -> Hyper Key",
        from: {
          key_code: "caps_lock",
          modifiers: {
            optional: ["any"],
          },
        },
        to: [
          {
            set_variable: {
              name: "hyper",
              value: 1,
            },
          },
        ],
        to_after_key_up: [
          {
            set_variable: {
              name: "hyper",
              value: 0,
            },
          },
        ],
        to_if_alone: [
          {
            key_code: "escape",
          },
        ],
        type: "basic",
      },
    ],
  },


  // Hyper key special functions (spacebar for language switch, etc.)
  {
    description: "Hyper Special Functions",
    manipulators: [
      {
        description: "escape = capslock switch",
        conditions: [
          {
            name: "hyper",
            type: "variable_if",
            value: 1,
          },
        ],
        from: {
          key_code: "escape",
        },
        to: [
          {
            key_code: "caps_lock",
            modifiers: ["left_control"],
          },
        ],
        type: "basic",
      },
    ],
  },

  ...createHyperSubLayers({
    // Basic navigation - direct key mappings
    h: {
      to: [{ key_code: "left_arrow" }],
      description: "←",
    },
    j: {
      to: [{ key_code: "down_arrow" }],
      description: "↓",
    },
    k: {
      to: [{ key_code: "up_arrow" }],
      description: "↑",
    },
    l: {
      to: [{ key_code: "right_arrow" }],
      description: "→",
    },

    // Applications
    q: app("Firefox"),
    e: app("Arc"),
    r: app("iTerm"),
    t: app("Notes"),
    s: app("Slack"),
    f: app("Cursor"),

    // Deletion operations
    m: {
      to: [{ key_code: "return_or_enter" }],
      description: "Enter",
    },

    // Terminal controls
    d: {
      to: [{ key_code: "d", modifiers: ["left_control"] }],
      description: "Ctrl+D (EOF)",
    },
    u: {
      to: [{ key_code: "u", modifiers: ["left_control"] }],
      description: "Ctrl+U",
    },
    z: {
      to: [{ key_code: "z", modifiers: ["left_control"] }],
      description: "Ctrl+Z (suspend)",
    },
    x: {
      to: [{ key_code: "r", modifiers: ["left_control"] }],
      description: "Ctrl+R (reverse search)",
    },
    c: {
      to: [{ key_code: "c", modifiers: ["left_control"] }],
      description: "Ctrl+C (interrupt)",
    },
    a: {
      to: [{ key_code: "a", modifiers: ["left_control"] }],
      description: "Ctrl+A (beginning of line)",
    },

    // Symbol shifter
    open_bracket: {
      to: [{ key_code: "9", modifiers: ["left_shift"] }],
      description: "( (left parenthesis)",
    },
    close_bracket: {
      to: [{ key_code: "0", modifiers: ["left_shift"] }],
      description: ") (right parenthesis)",
    },
    semicolon: {
      to: [{ key_code: "semicolon", modifiers: ["left_shift"] }],
      description: ": (colon)",
    },
    quote: {
      to: [{ key_code: "equal_sign" }],
      description: "= (equals)",
    },

    // Navigation sublayer - Advanced navigation with modifiers
    w: {
      // Window/Advanced navigation operations
      h: {
        to: [{ key_code: "left_arrow", modifiers: ["left_shift"] }],
        description: "Select left",
      },
      j: {
        to: [{ key_code: "down_arrow", modifiers: ["left_shift"] }],
        description: "Select down",
      },
      k: {
        to: [{ key_code: "up_arrow", modifiers: ["left_shift"] }],
        description: "Select up",
      },
      l: {
        to: [{ key_code: "right_arrow", modifiers: ["left_shift"] }],
        description: "Select right",
      },

      e: app("Finder"),
      r: app("Preview"),
    },
  }),
];

fs.writeFileSync(
  "karabiner.json",
  JSON.stringify(
    {
      global: { show_in_menu_bar: false },
      profiles: [
        {
          complex_modifications: {
            rules: rules,
          },
          devices: [
            {
              identifiers: {
                is_keyboard: true,
                product_id: 641,
                vendor_id: 1452,
              },
              manipulate_caps_lock_led: false,
            },
            {
              identifiers: {
                is_pointing_device: true,
                product_id: 45108,
                vendor_id: 1133,
              },
              ignore: false,
              mouse_flip_vertical_wheel: true,
              simple_modifications: [
                {
                  from: { pointing_button: "button4" },
                  to: [{ key_code: "delete_or_backspace" }],
                },
                {
                  from: { pointing_button: "button6" },
                  to: [{ apple_vendor_keyboard_key_code: "mission_control" }],
                },
              ],
            },
          ],
          name: "Default profile",
          selected: true,
          virtual_hid_keyboard: { keyboard_type_v2: "ansi" },
        },
      ],
    },
    null,
    2
  )
);
