/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import rewire from "rewire"
import React from "react"
import ReactDOM from "react-dom"
const TemplateInterpolation = rewire("./TemplateInterpolation")
const load = TemplateInterpolation.__get__("load")
describe('template interpolation', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    return new Promise(resolve => {
      ReactDOM.render(<TemplateInterpolation onReady={resolve} />, div);
    });
  });
});

// @ponicode
describe("load", () => {
    test("0", () => {
        let callFunction = () => {
            load("Michael")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            load("Anas")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            load("Edmond")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            load("George")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            load("Jean-Philippe")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            load(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("componentDidMount", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Anas", "Pierre Edouard", "Anas"], ["Michael", "Jean-Philippe", "Michael"], ["Anas", "Jean-Philippe", "Jean-Philippe"]]
        inst = new TemplateInterpolation.default(object)
    })

    test("0", async () => {
        await inst.componentDidMount()
    })
})

// @ponicode
describe("componentDidUpdate", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Anas", "George", "Pierre Edouard"], ["Pierre Edouard", "Anas", "Michael"], ["Jean-Philippe", "Edmond", "Michael"]]
        inst = new TemplateInterpolation.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentDidUpdate()
        }
    
        expect(callFunction).not.toThrow()
    })
})
