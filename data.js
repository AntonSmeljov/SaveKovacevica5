var APP_DATA = {
  "scenes": [
    {
      "id": "0-dnevni-boravak",
      "name": "Dnevni boravak",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.9705740882054794,
        "pitch": 0.017493509830737608,
        "fov": 1.4390866472079973
      },
      "linkHotspots": [
        {
          "yaw": 1.6063369996059045,
          "pitch": -0.2813432703043439,
          "rotation": 0,
          "target": "1-spavaa-soba"
        },
        {
          "yaw": 0.5505951941436571,
          "pitch": -0.02595621472342735,
          "rotation": 0,
          "target": "3-kupatilo--toalet"
        },
        {
          "yaw": -2.266175477790213,
          "pitch": 0.04271155854162245,
          "rotation": 0,
          "target": "4-dvorite"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-spavaa-soba",
      "name": "Spavaća soba",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 1.1354005550951776,
        "pitch": 0.052343476173918546,
        "fov": 1.4390866472079973
      },
      "linkHotspots": [
        {
          "yaw": 1.619309855344838,
          "pitch": 0.16451251455120186,
          "rotation": 0,
          "target": "2-spavaa-soba-2"
        },
        {
          "yaw": 0.18185885688867032,
          "pitch": 0.3936638423877117,
          "rotation": 0,
          "target": "0-dnevni-boravak"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-spavaa-soba-2",
      "name": "Spavaća soba 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -2.9742824217144452,
        "pitch": -0.020738834563129416,
        "fov": 1.4390866472079973
      },
      "linkHotspots": [
        {
          "yaw": 2.685294778808206,
          "pitch": 0.17231538803978097,
          "rotation": 0,
          "target": "1-spavaa-soba"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-kupatilo--toalet",
      "name": "Kupatilo & Toalet",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.6790327036715134,
        "pitch": 0.01207890310607418,
        "fov": 1.4390866472079973
      },
      "linkHotspots": [
        {
          "yaw": -0.07514023703301831,
          "pitch": -0.034766456094299514,
          "rotation": 0,
          "target": "0-dnevni-boravak"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-dvorite",
      "name": "Dvorište",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 2.591326119935288,
        "pitch": 0.09298880481287242,
        "fov": 1.4390866472079973
      },
      "linkHotspots": [
        {
          "yaw": 2.14555608117825,
          "pitch": -0.06948793636451711,
          "rotation": 0,
          "target": "0-dnevni-boravak"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Save Kovacevica",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
