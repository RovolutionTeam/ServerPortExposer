// Open some ports \\

import { config } from "dotenv";
import StartMongoDb from "./Mongodb";
import { setupTunnel } from "./Tunnel";

config()


StartMongoDb().then(() => {

    let tunnelData = [
        { port: "http://10.113.206.237:9000/", tunnelName: "PORTAINER" },
        { port: "22", tunnelName: "PORTAINER_SSH" },
    ];

    tunnelData.forEach(({ port, tunnelName }) => {
        setupTunnel(port, tunnelName);
    });
});