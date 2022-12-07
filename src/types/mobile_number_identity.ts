export type MobileNumberIdentity = {
  "version": "0.1.0",
  "name": "mobile_number_identity",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "global",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "programData",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "InitializeParams"
          }
        }
      ]
    },
    {
      "name": "createIdentity",
      "accounts": [
        {
          "name": "identity",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "validator",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "treasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "global",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "CreateIdentityParams"
          }
        }
      ]
    },
    {
      "name": "updateConfig",
      "accounts": [
        {
          "name": "global",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "UpdateConfigParams"
          }
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "global",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "docs": [
              "Bump nonce of the PDA (1)."
            ],
            "type": "u8"
          },
          {
            "name": "authority",
            "docs": [
              "The authority that is permitted to update this state (32)"
            ],
            "type": "publicKey"
          },
          {
            "name": "validator",
            "docs": [
              "The authority that validates the association of the phone number to the user's wallet inside Firebase Functions (32)"
            ],
            "type": "publicKey"
          },
          {
            "name": "treasury",
            "docs": [
              "The wallet that stores the collected fees (used for Firebase services payments) (32)"
            ],
            "type": "publicKey"
          },
          {
            "name": "creationFee",
            "docs": [
              "Amount of fee being collected when a user registers his / her wallet (8)"
            ],
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "identity",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "docs": [
              "Bump nonce of the PDA (1)."
            ],
            "type": "u8"
          },
          {
            "name": "id",
            "docs": [
              "The hash of the phone number (32)"
            ],
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "series",
            "docs": [
              "String in bytes of the series (YYYYDDD, eg. 2022340) (7)"
            ],
            "type": {
              "array": [
                "u8",
                7
              ]
            }
          },
          {
            "name": "owner",
            "docs": [
              "Owner of this identity (32)"
            ],
            "type": "publicKey"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "CreateIdentityParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "phoneNumber",
            "type": "string"
          },
          {
            "name": "series",
            "type": "string"
          }
        ]
      }
    },
    {
      "name": "InitializeParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "validator",
            "type": "publicKey"
          },
          {
            "name": "treasury",
            "type": "publicKey"
          },
          {
            "name": "creationFee",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "UpdateConfigParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": {
              "option": "publicKey"
            }
          },
          {
            "name": "validator",
            "type": {
              "option": "publicKey"
            }
          },
          {
            "name": "treasury",
            "type": {
              "option": "publicKey"
            }
          },
          {
            "name": "creationFee",
            "type": {
              "option": "u64"
            }
          }
        ]
      }
    }
  ]
};

export const IDL: MobileNumberIdentity = {
  "version": "0.1.0",
  "name": "mobile_number_identity",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "global",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "programData",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "InitializeParams"
          }
        }
      ]
    },
    {
      "name": "createIdentity",
      "accounts": [
        {
          "name": "identity",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "validator",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "treasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "global",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "CreateIdentityParams"
          }
        }
      ]
    },
    {
      "name": "updateConfig",
      "accounts": [
        {
          "name": "global",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "UpdateConfigParams"
          }
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "global",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "docs": [
              "Bump nonce of the PDA (1)."
            ],
            "type": "u8"
          },
          {
            "name": "authority",
            "docs": [
              "The authority that is permitted to update this state (32)"
            ],
            "type": "publicKey"
          },
          {
            "name": "validator",
            "docs": [
              "The authority that validates the association of the phone number to the user's wallet inside Firebase Functions (32)"
            ],
            "type": "publicKey"
          },
          {
            "name": "treasury",
            "docs": [
              "The wallet that stores the collected fees (used for Firebase services payments) (32)"
            ],
            "type": "publicKey"
          },
          {
            "name": "creationFee",
            "docs": [
              "Amount of fee being collected when a user registers his / her wallet (8)"
            ],
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "identity",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "docs": [
              "Bump nonce of the PDA (1)."
            ],
            "type": "u8"
          },
          {
            "name": "id",
            "docs": [
              "The hash of the phone number (32)"
            ],
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "series",
            "docs": [
              "String in bytes of the series (YYYYDDD, eg. 2022340) (7)"
            ],
            "type": {
              "array": [
                "u8",
                7
              ]
            }
          },
          {
            "name": "owner",
            "docs": [
              "Owner of this identity (32)"
            ],
            "type": "publicKey"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "CreateIdentityParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "phoneNumber",
            "type": "string"
          },
          {
            "name": "series",
            "type": "string"
          }
        ]
      }
    },
    {
      "name": "InitializeParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "validator",
            "type": "publicKey"
          },
          {
            "name": "treasury",
            "type": "publicKey"
          },
          {
            "name": "creationFee",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "UpdateConfigParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": {
              "option": "publicKey"
            }
          },
          {
            "name": "validator",
            "type": {
              "option": "publicKey"
            }
          },
          {
            "name": "treasury",
            "type": {
              "option": "publicKey"
            }
          },
          {
            "name": "creationFee",
            "type": {
              "option": "u64"
            }
          }
        ]
      }
    }
  ]
};
