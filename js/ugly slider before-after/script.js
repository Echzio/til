const ReadySlider = () => {
  const Parent = document.querySelector('div[data-action="sliderParent"]');

  class StyledParent {
    addStyle = item => {
      document.querySelector('#resize img').style.width = `${Parent.clientWidth}px`;
      item.style.position = "relative";
      for (let img of item.querySelectorAll('img')) {
        img.style.position = "absolute";
        img.style.top = "0";
        img.style.left = "0";
      }
      GenerateLine();
    }
  }

  const GenerateLine = () => {
    const Line = document.createElement('div');
    Line.id = "lineCutter";
    Line.style.position = "absolute";
    Line.style.height = "100%";
    Line.style.width = "15px";
    Line.style.top = "0";
    Line.style.left = `${Parent.clientWidth/2 - 15}px`;
    Line.style.cursor = "grab";
    Line.style.backgroundColor = "#fff";
    Line.style.zIndex = '100';
    Parent.appendChild(Line);

    EventLine(Line);
  }

  const EventLine = line => {
    line.onmousedown = () => {
      GenerateCoordinats('go');
    }
    line.onmouseup = () => {
      GenerateCoordinats('stop');
    }
  }

  const GenerateCoordinats = (type) => {
    if (type === 'go') {
      Parent.onmousemove = (e) => {
        document.getElementById('lineCutter').style.left = `${e.clientX}px`;
        document.getElementById('resize').style.width = `${e.clientX}px`;
      }
      // document.getElementById('lineCutter').style.margin = "initial";
    } else if (type === 'stop') {
      Parent.onmousemove = null;
    }

  }


  const StyledMeParent = new StyledParent();
  StyledMeParent.addStyle(Parent);

}

document.addEventListener('DOMContentLoaded', ReadySlider);