import React from "react";
import "./App.css";
import { Layout } from "./layout";
import { LayoutItem } from "./layout-item";

const App = () => {
  const val = 500;
  return (
    <div>
      <Layout>
        <LayoutItem
          smallDeviceSize={12}
          mediumDeviceSize={8}
          largeDeviceSize={4}
        >
          <div className={"bg-red-500 rounded-lg shadow-xl min-h-[50px]"} />
        </LayoutItem>
        <LayoutItem
          smallDeviceSize={12}
          mediumDeviceSize={8}
          largeDeviceSize={4}
        >
          <div className="bg-orange-500 rounded-lg shadow-xl min-h-[50px]" />
        </LayoutItem>
        <LayoutItem
          smallDeviceSize={12}
          mediumDeviceSize={8}
          largeDeviceSize={4}
        >
          <div className="bg-yellow-500 rounded-lg shadow-xl min-h-[50px]" />
        </LayoutItem>
      </Layout>
      <Layout>
        <LayoutItem size={12}>
          <div className="bg-green-500 rounded-lg shadow-xl min-h-[50px]" />
        </LayoutItem>
        <LayoutItem size={3}>
          <div className="bg-teal-500 rounded-lg shadow-xl min-h-[50px]" />
        </LayoutItem>
        <LayoutItem size={3}>
          <div className="bg-blue-500 rounded-lg shadow-xl min-h-[50px]" />
        </LayoutItem>
        <LayoutItem size={3}>
          <div className="bg-indigo-500 rounded-lg shadow-xl min-h-[50px]" />
        </LayoutItem>
        <LayoutItem size={3}>
          <div className="bg-purple-500 rounded-lg shadow-xl min-h-[50px]" />
        </LayoutItem>
        <LayoutItem size={12}>
          <div className="bg-pink-500 rounded-lg shadow-xl min-h-[50px]" />
        </LayoutItem>
        <LayoutItem size={6}>
          <div className="bg-slate-500 rounded-lg shadow-xl min-h-[50px]" />
        </LayoutItem>
        <LayoutItem size={6}>
          <div className="border-black border-2 min-h-[50px]">
            <p>Testing</p>
          </div>
        </LayoutItem>
      </Layout>
    </div>
  );
}

export default App;
