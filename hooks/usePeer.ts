import Peer from "peerjs";
import { useEffect, useState, useRef } from "react";

const usePeer = () => {
    const [peer, setPeer] = useState<Peer>();
    const [peerId, setPeerId] = useState('');
    const isPeerSet = useRef(false);

    useEffect(() => {
        if(isPeerSet.current) return;
        isPeerSet.current = true;

        (async function initPeer() {
            const myPeer = new (await import('peerjs')).default();
            setPeer(myPeer);
            myPeer.on('open', (id) => {
                console.log('your peer id', id);
                setPeerId(id);
            });
        })()
    }, []);

    return {
        peer,
        peerId
    }
};

export default usePeer;