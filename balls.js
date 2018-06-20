let Engine = Matter.Engine,
  Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies;

let engine = Engine.create();

function init() {
  let numm = Math.random();
  $("canvas").remove();

  let width = $(window).width();
  let height = $(window).height();
  let vmin = Math.min(width, height);

  engine.events = {};
  World.clear(engine.world);
  Engine.clear(engine);

  engine = Engine.create();

  let render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      wireframes: false,
      background: 'transparent',
      width: width,
      height: height
    }
  });

  World.add(engine.world, [
    Bodies.rectangle(width / 2, height + 50, width, 100, {
      isStatic: true
    }),
    Bodies.rectangle(width / 2, -50, width, 100, {
      isStatic: true
    }),
    Bodies.rectangle(-50, height / 2, 100, height, {
      isStatic: true
    }),
    Bodies.rectangle(width + 50, height / 2, 100, height, {
      isStatic: true
    }),
    Bodies.rectangle(width / 2, height / 2, vmin * 0.961, vmin * 0.135, {
      isStatic: true,
      render: {
        fillStyle: "white"
      }
    }),
    Bodies.rectangle(width / 2, height / 4 * 3, vmin * 0.37, vmin * 0.131, {
      isStatic: true,
      render: {
        fillStyle: "white"
      }
    }),
    Bodies.circle(width / 2 - (vmin * 0.182), height / 4 * 3, vmin * 0.065, {
      isStatic: true,
      render: {
      fillStyle: "white"
    }
    }),
    Bodies.circle(width / 2 + (vmin * 0.182), height / 4 * 3, vmin * 0.065, {
      isStatic: true,
      render: {
      fillStyle: "white"
    }
    })
  ]);

  for (let i = 0; i < 150; i++) {
    let radius = Math.round(10 + (Math.random() * vmin / 30));
    /*var color = '#'
    var chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    for (var j = 0; j < 6; j++) {
      color = color + chars[Math.round(Math.random() * 16 - 0.5)];
    }*/
    World.add(engine.world, Bodies.circle(
      Math.random() * width,
      Math.random() * height / 4,
      radius, {
        render: {
          fillStyle: ['#EA1070', '#EAC03C', '#25DDBC', '#007DB0', '#252B7F', '#FF6040'][Math.round(Math.random() * 6 - 0.5)]
        }
      }
    ))
  }

  Engine.run(engine);

  Render.run(render);
  let num = 0;
  function update() {
    engine.world.gravity.x = Math.sin(num / 100);
    engine.world.gravity.y = Math.cos(num / 100);
    num += 1.7;
    idRAF = requestAnimationFrame(update.bind(this));
  }
  update();
}

init();

$(window).resize(function() {
  init();
});
