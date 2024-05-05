import React, {useState, useContext} from "react";
import { useSpring, animated } from '@react-spring/web';
import { TempoContext } from "../context/TempoContext";

const ScrollPreview = () => {
    const tempoContext = useContext(TempoContext);
    const { minimumTempo, maximumTempo, currentTempoMod, scrollSpeedPreview } = tempoContext;
    const [ isScrollPreviewOn, setIsScrollPreviewOn ] = useState(false);

    const minArrowNote = ((60000 / minimumTempo) * 4) / scrollSpeedPreview;
    const maxArrowNote = ((60000 / maximumTempo) * 4) / scrollSpeedPreview;

    const checkWindowSize = () => {
        return window.innerWidth > 326 ? 100 : 30
    }

    const minSprings = useSpring({
        from: { y: 320, x: checkWindowSize() },
        to: { y: 0 },
        loop: true,
        config: {
            duration: minArrowNote,
        }
    })

    const maxSprings = useSpring({
        from: { y: 320, x: checkWindowSize() },
        to: { y: 0 },
        loop: true,
        config: {
            duration: maxArrowNote,
        }   
    })

    const showScrollPreview = () => {
        return(
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div style={{flex: 2}}>
                    <h5>Min. Tempo</h5>
                    <div>
                    <animated.div
                        style={{
                            width: 50,
                            height: 50,
                            background: '#008503',
                            borderRadius: 8,
                            ...minSprings,
                        }}        
                    />
                    </div>
                </div>
                <div>
                    <h5>|x{scrollSpeedPreview} |</h5>
                    <h5>({minimumTempo} - {maximumTempo})</h5>
                </div>
                <div style={{flex: 2}}>
                    <h5>Max. Tempo</h5>
                    <div>
                    <animated.div
                        style={{
                            width: 50,
                            height: 50,
                            background: '#D1005B',
                            borderRadius: 8,
                            ...maxSprings,
                        }}
                    />
                    </div>
                </div>
            </div>
        )
    }

    return (
        <section className="scroll-preview-container">
            <button onClick={() => setIsScrollPreviewOn(!isScrollPreviewOn)}>{!isScrollPreviewOn ? "Show Scroll Preview" : "Hide Scroll Preview"}</button>
            {!isScrollPreviewOn ? null : showScrollPreview()}
        </section>
    )
}

export default ScrollPreview;