import { useState } from "react";
import { useMutation } from "react-query";

function App() {
  const [port, setPort] = useState();
  const { mutateAsync: print, isLoading: isPrinting } = useMutation(
    async () => {
      // let _port = port;
      // if (_port == null) {
      //   _port = await navigator.serial.requestPort();
      //   await _port.open({ baudRate: 9600 });
      //   setPort(_port);
      // }
      const filters = [
        { vendorId: 1208, productId: 514 },
        // { vendorId: 0x1209, productId: 0xa850 },
      ];

      let _port = port;
      if (_port == null) {
        _port = await navigator.usb.requestDevice({ name: "usb", filters });
        let hey = await navigator.usb.getDevices();
        // await hey[0].claimInterface();
        // console.log("hey", hey[0]);
        await _port.open();
        // const result = await hey[0].open();
        console.log("result", _port);
      }

      // const writer = _port.writable?.getWriter();
      // if (writer != null) {
      //   const data = await render(receipt);

      //   await writer.write(data);
      //   writer.releaseLock();
      // }
    }
  );
  return (
    <div className="App">
      <button disabled={isPrinting} onClick={() => print()}>
        {isPrinting ? "프린트 중..." : "프린트"}
      </button>
    </div>
  );
}

export default App;
