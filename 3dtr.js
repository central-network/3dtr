self.name = "window";

(self.init = function() {
  var ALLOCATION_BYTEOFFSET, BUFFER_TEST_START_LENGTH, BUFFER_TEST_STEP_DIVIDER, BYTES_PER_ELEMENT, BigInt64Array, BigUint64Array, CanvasRenderingContext2D, DUMP_WEAKMAP, EVENT_READY, Float32Array, Float64Array, HEADERS_BYTE_LENGTH, HEADERS_LENGTH, HEADERS_LENGTH_OFFSET, HINDEX_BEGIN, HINDEX_BYTELENGTH, HINDEX_BYTEOFFSET, HINDEX_END, HINDEX_ITERINDEX, HINDEX_ITERLENGTH, HINDEX_LENGTH, HINDEX_LOCKFREE, HINDEX_RESOLV_ID, HINDEX_WAITCOUNT, HTMLDocument, HTMLElement, INITIAL_BYTELENGTH, INIT_SCREEN, INNER_HEIGHT, INNER_WIDTH, ITERATION_PER_THREAD, Int16Array, Int32Array, Int8Array, MAX_PTR_COUNT, MAX_THREAD_COUNT, OffscreenCanvas, OnscreenCanvas, RATIO_ASPECT, RATIO_PIXEL, RESERVED_BYTELENGTH, TypedArray, Uint16Array, Uint32Array, Uint8Array, Uint8ClampedArray, WebGL2RenderingContext, addInt16, addInt32, addInt8, addUint16, addUint32, addUint8, andInt16, andInt32, andInt8, andUint16, andUint32, andUint8, bc, blobURL, bridge, bridgeHandler, bridgemessage, compareInt16, compareInt32, compareInt8, compareUint16, compareUint32, compareUint8, createBlobURL, createBuffers, createCanvas, createThreads, createWorker, cu8, document, dvw, error, exchangeInt16, exchangeInt32, exchangeInt8, exchangeUint16, exchangeUint32, exchangeUint8, f32, f64, getInt16, getInt32, getInt8, getUint16, getUint32, getUint8, i16, i32, i64, initMemory, isBridge, isThread, isWindow, isWorker, listenEvents, littleEnd, loadInt16, loadInt32, loadInt8, loadUint16, loadUint32, loadUint8, lock, log, malloc, now, number, objbuf, objects, orInt16, orInt32, orInt8, orUint16, orUint32, orUint8, p32, pnow, ptrbuf, randomUUID, ref1, regenerate, replies, request, resolvCall, resolvFind, resolvs, selfName, setInt16, setInt32, setInt8, setUint16, setUint32, setUint8, sharedHandler, si8, storeInt16, storeInt32, storeInt8, storeUint16, storeUint32, storeUint8, subInt16, subInt32, subInt8, subUint16, subUint32, subUint8, threadHandler, threadId, threadmessage, u16, u32, u64, ui8, unlock, warn, workers, xorInt16, xorInt32, xorInt8, xorUint16, xorUint32, xorUint8;
  log = function() {
    return console.log(name, ...arguments);
  };
  warn = function() {
    return console.warn(name, ...arguments);
  };
  error = function() {
    return console.error(name, ...arguments);
  };
  number = function() {
    return arguments[0].split("").reduce(function(a, b) {
      return b.charCodeAt() + ((typeof a.charCodeAt === "function" ? a.charCodeAt() : void 0) || a);
    });
  };
  [
    HEADERS_LENGTH_OFFSET = 1,
    HINDEX_BEGIN = HEADERS_LENGTH_OFFSET++,
    HINDEX_END = HEADERS_LENGTH_OFFSET++,
    HINDEX_BYTEOFFSET = HEADERS_LENGTH_OFFSET++,
    HINDEX_LENGTH = HEADERS_LENGTH_OFFSET++,
    HINDEX_BYTELENGTH = HEADERS_LENGTH_OFFSET++,
    HINDEX_RESOLV_ID = HEADERS_LENGTH_OFFSET++,
    HINDEX_LOCKFREE = HEADERS_LENGTH_OFFSET++,
    HINDEX_WAITCOUNT = HEADERS_LENGTH_OFFSET++,
    HINDEX_ITERINDEX = HEADERS_LENGTH_OFFSET++,
    HINDEX_ITERLENGTH = HEADERS_LENGTH_OFFSET++,
    BUFFER_TEST_START_LENGTH = Math.pow(((typeof navigator !== "undefined" && navigator !== null ? navigator.deviceMemory : void 0) || 1) + 1,
    11),
    BUFFER_TEST_STEP_DIVIDER = 1e1,
    INITIAL_BYTELENGTH = 6e4,
    BYTES_PER_ELEMENT = 4,
    RESERVED_BYTELENGTH = 64,
    ALLOCATION_BYTEOFFSET = 100000 * 16 * 4,
    HEADERS_LENGTH = 16,
    HEADERS_BYTE_LENGTH = 4 * 16,
    MAX_PTR_COUNT = 1e5,
    MAX_THREAD_COUNT = 2, // 4 + navigator?.hardwareConcurrency or 3
    ITERATION_PER_THREAD = 1000000,
    INNER_WIDTH = typeof innerWidth !== "undefined" && innerWidth !== null ? innerWidth : 640,
    INNER_HEIGHT = typeof innerHeight !== "undefined" && innerHeight !== null ? innerHeight : 480,
    RATIO_PIXEL = typeof devicePixelRatio !== "undefined" && devicePixelRatio !== null ? devicePixelRatio : 1,
    RATIO_ASPECT = INNER_WIDTH / INNER_HEIGHT,
    EVENT_READY = new (EVENT_READY = class EVENT_READY extends Number {})(number(/EVENT_READY/.source)),
    DUMP_WEAKMAP = new (DUMP_WEAKMAP = class DUMP_WEAKMAP extends Number {})(number(/DUMP_WEAKMAP/.source)),
    INIT_SCREEN = new (INIT_SCREEN = class INIT_SCREEN extends Number {})(number(/INIT_SCREEN/.source)),
    (function() {
      if (HEADERS_LENGTH_OFFSET >= HEADERS_LENGTH) {
        throw /MAX_HEADERS_LENGTH_EXCEED/;
      }
    })()
  ];
  [blobURL, bridge, objbuf, ptrbuf, lock, unlock, malloc, littleEnd, request, objects, p32, dvw, si8, ui8, cu8, i32, u32, f32, f64, u64, i64, i16, u16, andUint32, orUint32, xorUint32, subUint32, addUint32, loadUint32, storeUint32, getUint32, setUint32, exchangeUint32, compareUint32, andUint16, orUint16, xorUint16, subUint16, addUint16, loadUint16, storeUint16, getUint16, setUint16, exchangeUint16, compareUint16, andUint8, orUint8, xorUint8, subUint8, addUint8, loadUint8, storeUint8, getUint8, setUint8, exchangeUint8, compareUint8, andInt32, orInt32, xorInt32, subInt32, addInt32, loadInt32, storeInt32, getInt32, setInt32, exchangeInt32, compareInt32, andInt16, orInt16, xorInt16, subInt16, addInt16, loadInt16, storeInt16, getInt16, setInt16, exchangeInt16, compareInt16, andInt8, orInt8, xorInt8, subInt8, addInt8, loadInt8, storeInt8, getInt8, setInt8, exchangeInt8, compareInt8] = [];
  [OnscreenCanvas, OffscreenCanvas, WebGL2RenderingContext, CanvasRenderingContext2D, Uint8Array, Int8Array, Uint8ClampedArray, Uint16Array, Int16Array, Uint32Array, Int32Array, Float32Array, Float64Array, BigInt64Array, BigUint64Array] = [];
  [
    bc = new BroadcastChannel("3dtr"),
    selfName = self.name,
    isWindow = self.document != null,
    isWorker = typeof WorkerGlobalScope !== "undefined" && WorkerGlobalScope !== null,
    isBridge = /bridge/i.test(selfName),
    isThread = /thread/i.test(selfName),
    threadId = isThread && parseInt(selfName.match(/\d+/)),
    now = Date.now(),
    pnow = performance.now(),
    resolvs = new WeakMap(),
    replies = new Object(),
    objects = new Object(),
    workers = new self.Array(),
    littleEnd = new self.Uint8Array(self.Uint32Array.of(0x01).buffer)[0],
    TypedArray = Object.getPrototypeOf(self.Uint8Array),
    document = (ref1 = self.document) != null ? ref1 : new Proxy({
      getElementById: function(id) {
        var ptri;
        ptri = resolvCall();
        if (isBridge) {
          postMessage({
            document: {
              getElementById: id
            }
          });
        }
        return log(id,
    ptri);
      }
    },
    {
      get: function(ref,
    key,
    pxy) {
        return Reflect.get(...arguments);
      }
    })
  ];
  resolvFind = function(id, retry = 0) {
    var i, ptri;
    i = HINDEX_RESOLV_ID + Atomics.load(p32, 1);
    ptri = 0;
    //error { id, retry }
    while (i > 0) {
      if (id === Atomics.load(p32, i)) {
        ptri = i - HINDEX_RESOLV_ID;
        break;
      }
      i -= HEADERS_LENGTH;
    }
    if (!ptri) {
      if (isBridge) {
        ptri = Atomics.add(p32, 1, HEADERS_LENGTH);
        Atomics.store(p32, ptri + HINDEX_RESOLV_ID, id);
        return ptri;
      }
      Atomics.wait(p32, 3, 0, 20);
      if (retry > 100) {
        throw /TOO_MANY_TRIED_TO_FIND/;
      }
      return resolvFind(id, ++retry);
    } else if (isBridge) {
      return ptri;
    }
    Atomics.wait(p32, ptri + HINDEX_LOCKFREE);
    return ptri;
  };
  resolvCall = function() {
    var cBrace, cBreak, cColon, cCount, call, discard, e, lasti, length, stack, vals;
    Error.captureStackTrace(e = {});
    stack = e.stack.toString();
    length = stack.length;
    cBreak = "\n".charCodeAt();
    cBrace = "\)".charCodeAt();
    cColon = "\:".charCodeAt();
    cCount = 2;
    discard = true;
    lasti = length;
    call = 0;
    vals = [];
    while (length--) {
      switch (stack.charCodeAt(length)) {
        case cBreak:
          discard = !(cCount = 2);
          break;
        case cBrace:
          lasti = length;
          break;
        case cColon:
          if (!discard) {
            call += vals[vals.length] = parseInt(stack.substring(length + 1, lasti));
          }
          if (!--cCount) {
            discard = true;
          }
          lasti = length;
      }
    }
    return resolvFind(call);
  };
  randomUUID = function() {
    return (typeof crypto !== "undefined" && crypto !== null ? crypto.randomUUID() : void 0) || btoa(new Date().toISOString()).toLowerCase().split("").toSpliced(8, 0, "-").toSpliced(13, 0, "-").toSpliced(18, 0, "-").toSpliced(24, 0, "-").join("").substring(0, 36).trim().padEnd(36, String.fromCharCode(50 + Math.random() * 40));
  };
  initMemory = function(buffers) {
    objbuf = buffers.objbuf;
    ptrbuf = buffers.ptrbuf;
    u64 = new self.BigUint64Array(objbuf);
    i64 = new self.BigInt64Array(objbuf);
    f32 = new self.Float32Array(objbuf);
    f64 = new self.Float64Array(objbuf);
    i32 = new self.Int32Array(objbuf);
    u32 = new self.Uint32Array(objbuf);
    i16 = new self.Int16Array(objbuf);
    u16 = new self.Uint16Array(objbuf);
    ui8 = new self.Uint8Array(objbuf);
    cu8 = new self.Uint8ClampedArray(objbuf);
    si8 = new self.Int8Array(objbuf);
    dvw = new self.DataView(objbuf);
    p32 = new self.Int32Array(ptrbuf);
    lock = function(ptri) {
      if (ptri) {
        return Atomics.wait(p32, ptri + HINDEX_LOCKFREE);
      } else {
        return Atomics.wait(p32, isThread ? 4 : 3);
      }
    };
    unlock = function(ptri) {
      if (ptri) {
        Atomics.store(p32, ptri + HINDEX_LOCKFREE, 1);
        return Atomics.notify(p32, ptri + HINDEX_LOCKFREE);
      } else {
        if (isBridge) {
          return Atomics.notify(p32, 4);
        } else {
          return Atomics.notify(p32, 3);
        }
      }
    };
    malloc = function(byteLength = 0, alignBytes = 1) {
      var byteOffset, mod;
      if (byteLength > 0) {
        if (alignBytes > 1) {
          if (mod = objbuf.byteLength % alignBytes) {
            Atomics.add(p32, 0, alignBytes - mod);
          }
        }
        byteOffset = Atomics.add(p32, 0, byteLength);
        objbuf.grow(byteOffset + byteLength);
        return byteOffset;
      }
      return objbuf.byteLength;
    };
    (function() {
      addUint32 = Atomics.add.bind(Atomics, u32);
      andUint32 = Atomics.and.bind(Atomics, u32);
      orUint32 = Atomics.or.bind(Atomics, u32);
      xorUint32 = Atomics.xor.bind(Atomics, u32);
      subUint32 = Atomics.sub.bind(Atomics, u32);
      loadUint32 = Atomics.load.bind(Atomics, u32);
      storeUint32 = Atomics.store.bind(Atomics, u32);
      exchangeUint32 = Atomics.exchange.bind(Atomics, u32);
      compareUint32 = Atomics.compareExchange.bind(Atomics, u32);
      getUint32 = function(o) {
        return dvw.getUint32(o, littleEnd);
      };
      setUint32 = function(o, v) {
        return dvw.setUint32(o, v, littleEnd);
      };
      addUint16 = Atomics.add.bind(Atomics, u16);
      andUint16 = Atomics.and.bind(Atomics, u16);
      orUint16 = Atomics.or.bind(Atomics, u16);
      xorUint16 = Atomics.xor.bind(Atomics, u16);
      subUint16 = Atomics.sub.bind(Atomics, u16);
      loadUint16 = Atomics.load.bind(Atomics, u16);
      storeUint16 = Atomics.store.bind(Atomics, u16);
      exchangeUint16 = Atomics.exchange.bind(Atomics, u16);
      compareUint16 = Atomics.compareExchange.bind(Atomics, u16);
      getUint16 = function(o) {
        return dvw.getUint16(o, littleEnd);
      };
      setUint16 = function(o, v) {
        return dvw.setUint16(o, v, littleEnd);
      };
      addUint8 = Atomics.add.bind(Atomics, ui8);
      andUint8 = Atomics.and.bind(Atomics, ui8);
      orUint8 = Atomics.or.bind(Atomics, ui8);
      xorUint8 = Atomics.xor.bind(Atomics, ui8);
      subUint8 = Atomics.sub.bind(Atomics, ui8);
      loadUint8 = Atomics.load.bind(Atomics, ui8);
      storeUint8 = Atomics.store.bind(Atomics, ui8);
      exchangeUint8 = Atomics.exchange.bind(Atomics, ui8);
      compareUint8 = Atomics.compareExchange.bind(Atomics, ui8);
      getUint8 = function(o) {
        return dvw.getUint8(o, littleEnd);
      };
      setUint8 = function(o, v) {
        return dvw.setUint8(o, v, littleEnd);
      };
      addInt32 = Atomics.add.bind(Atomics, u32);
      andInt32 = Atomics.and.bind(Atomics, u32);
      orInt32 = Atomics.or.bind(Atomics, u32);
      xorInt32 = Atomics.xor.bind(Atomics, u32);
      subInt32 = Atomics.sub.bind(Atomics, u32);
      loadInt32 = Atomics.load.bind(Atomics, u32);
      storeInt32 = Atomics.store.bind(Atomics, u32);
      exchangeInt32 = Atomics.exchange.bind(Atomics, u32);
      compareInt32 = Atomics.compareExchange.bind(Atomics, u32);
      getInt32 = function(o) {
        return dvw.getInt32(o, littleEnd);
      };
      setInt32 = function(o, v) {
        return dvw.setInt32(o, v, littleEnd);
      };
      addInt16 = Atomics.add.bind(Atomics, u16);
      andInt16 = Atomics.and.bind(Atomics, u16);
      orInt16 = Atomics.or.bind(Atomics, u16);
      xorInt16 = Atomics.xor.bind(Atomics, u16);
      subInt16 = Atomics.sub.bind(Atomics, u16);
      loadInt16 = Atomics.load.bind(Atomics, u16);
      storeInt16 = Atomics.store.bind(Atomics, u16);
      exchangeInt16 = Atomics.exchange.bind(Atomics, u16);
      compareInt16 = Atomics.compareExchange.bind(Atomics, u16);
      getInt16 = function(o) {
        return dvw.getInt16(o, littleEnd);
      };
      setInt16 = function(o, v) {
        return dvw.setInt16(o, v, littleEnd);
      };
      addInt8 = Atomics.add.bind(Atomics, si8);
      andInt8 = Atomics.and.bind(Atomics, si8);
      orInt8 = Atomics.or.bind(Atomics, si8);
      xorInt8 = Atomics.xor.bind(Atomics, si8);
      subInt8 = Atomics.sub.bind(Atomics, si8);
      loadInt8 = Atomics.load.bind(Atomics, si8);
      storeInt8 = Atomics.store.bind(Atomics, si8);
      exchangeInt8 = Atomics.exchange.bind(Atomics, si8);
      compareInt8 = Atomics.compareExchange.bind(Atomics, si8);
      getInt8 = function(o) {
        return dvw.getInt8(o, littleEnd);
      };
      return setInt8 = function(o, v) {
        return dvw.setInt8(o, v, littleEnd);
      };
    })();
    return 0;
  };
  regenerate = function() {
    Object.defineProperties(TypedArray, {
      from: {
        value: function() {
          var array, i;
          array = new this(arguments[0].length);
          if (isBridge) {
            for (i in array) {
              array[i] = arguments[0][i];
            }
            Atomics.notify(p32, 3, 1, MAX_THREAD_COUNT);
          } else {
            Atomics.wait(p32, 3);
          }
          return array;
        }
      },
      of: {
        value: function() {
          var array, i;
          array = new this(arguments.length);
          if (isBridge) {
            for (i in array) {
              array[i] = arguments[i];
            }
            Atomics.notify(p32, 3, 1, MAX_THREAD_COUNT);
          } else {
            Atomics.wait(p32, 3);
          }
          return array;
        }
      }
    });
    Object.defineProperties(TypedArray.prototype, {
      indexUint8: {
        value: function() {
          return arguments[0] + (p32[resolvs.get(this)] + HINDEX_BYTEOFFSET) / 1;
        }
      },
      indexUint32: {
        value: function() {
          return arguments[0] + (p32[resolvs.get(this)] + HINDEX_BYTEOFFSET) / 4;
        }
      },
      subarray: {
        //part of this
        value: function(begin = 0, end = this.length) {
          return new this.constructor(this.buffer, this.byteOffset + this.BYTES_PER_ELEMENT * begin, end - begin);
        }
      },
      slice: {
        //copy to new
        value: function(begin = 0, end = this.length) {
          return new this.constructor(this, this.BYTES_PER_ELEMENT * begin, end - begin);
        }
      },
      [Symbol.iterator]: {
        value: function() {
          var begin, index, iterate, length, ptri, total;
          ptri = resolvs.get(this);
          length = -1 + Atomics.load(p32, ptri + HINDEX_LENGTH);
          begin = Atomics.load(p32, ptri + HINDEX_BEGIN);
          if (isBridge) {
            Atomics.wait(p32, 4);
            return {
              next: function() {
                return {
                  done: true
                };
              }
            };
          }
          index = 0;
          iterate = 0;
          total = 0;
          return {
            next: function() {
              if (!iterate) {
                iterate = ITERATION_PER_THREAD;
                index = Atomics.add(p32, ptri + HINDEX_ITERINDEX, iterate);
                total += iterate;
              }
              if (index > length) {
                Atomics.wait(p32, 3, 0, 100);
                Atomics.notify(p32, 4, 1);
                return {
                  done: true
                };
              }
              iterate--;
              return {
                value: index++ // + begin    
              };
            }
          };
        }
      }
    });
    Uint8Array = class Uint8Array extends self.Uint8Array {
      constructor(arg0, byteOffset, length) {
        var arg0ByteLength, arg0Length, arg0Offset, argc, begin, bpel, byteLength, copyEnd, copyStart, end, nextByteLength, ptri;
        ptri = resolvCall();
        argc = arguments.length;
        bpel = 1;
        if (isThread) {
          length = Atomics.load(p32, ptri + HINDEX_LENGTH);
          byteOffset = Atomics.load(p32, ptri + HINDEX_BYTEOFFSET);
          super(objbuf, byteOffset, length);
        } else if (isBridge) {
          if (argc === 1) {
            // new TypedArray( 24 );
            // new TypedArray( buffer );
            // new TypedArray( [ 2, 4, 1 ] );
            if (Number.isInteger(arg0)) {
              // new TypedArray( 24 );

              //Atomics.wait p32, 4, 0, 2240; #testing locks
              length = arg0;
              byteLength = length * bpel;
              byteOffset = malloc(byteLength, bpel);
            } else if (ArrayBuffer.isView(arg0)) {
              // new TypedArray( new TypedArray(?) );

              //Atomics.wait p32, 4, 0, 2240; #testing locks
              byteLength = arg0.byteLength;
              length = arg0.byteLength / bpel;
              byteOffset = malloc(byteLength, bpel);
              if (arg0.buffer === objbuf) {
                ui8.copyWithin(byteOffset, arg0.byteOffset, arg0.byteOffset + byteLength);
              } else {
                ui8.set(arg0, byteOffset);
              }
            } else if (Array.isArray) {
              // new TypedArray( [ 2, 4, 1 ] )

              //Atomics.wait p32, 4, 0, 2240; #testing locks
              length = arg0.length;
              byteLength = length * bpel;
              byteOffset = malloc(byteLength, bpel);
              ui8.set(arg0, byteOffset);
            }
          } else if (argc === 3) {
            // new TypedArray( buffer, 1221, 4 );
            // new TypedArray( new TypedArra( 2 ), 36, 2 );
            if (ArrayBuffer.isView(arg0)) {
              // new TypedArray( new TypedArra( 2 ), 36, 2 );
              copyStart = arg0.byteOffset + byteOffset;
              copyEnd = copyStart + length * bpel;
              byteLength = length * bpel;
              byteOffset = malloc(byteLength, bpel);
              if (arg0.buffer === objbuf) {
                ui8.copyWithin(byteOffset, copyStart, copyEnd);
              } else {
                ui8.set(new self.Uint8Array(arg0.buffer, copyStart, length), byteOffset);
              }
            } else if (arg0.byteLength) {
              // new TypedArray( buffer, 36, 2 );
              arg0Offset = byteOffset;
              byteLength = length * bpel;
              if (arg0 !== objbuf) {
                byteOffset = malloc(byteLength, bpel);
                ui8.set(new self.Uint8Array(arg0, arg0Offset, byteLength), byteOffset);
              }
            }
          } else if (argc === 2) {
            // new TypedArray( buffer, 36 );
            // new TypedArray( new TypedArra( 2 ), 36 );
            if (ArrayBuffer.isView(arg0)) {
              // new TypedArray( new TypedArra( 2 ), 36 );
              arg0Length = arg0.length;
              arg0ByteLength = arg0.BYTES_PER_ELEMENT * arg0Length;
              copyStart = arg0.byteOffset + byteOffset;
              copyEnd = copyStart + arg0ByteLength;
              nextByteLength = arg0ByteLength - byteOffset;
              byteLength = nextByteLength;
              length = byteLength / bpel;
              byteOffset = malloc(byteLength, bpel);
              if (arg0.buffer === objbuf) {
                ui8.copyWithin(byteOffset, copyStart, copyEnd);
              } else {
                ui8.set(arg0, byteOffset);
              }
            } else if (arg0.byteLength) {
              // new TypedArray( buffer, 36 );
              arg0Offset = byteOffset;
              byteLength = arg0.byteLength - byteOffset;
              length = byteLength / bpel;
              if (arg0 !== objbuf) {
                byteOffset = malloc(byteLength, bpel);
              }
              if (arg0 !== objbuf) {
                ui8.set(new self.Uint8Array(arg0, arg0Offset), byteOffset);
              }
            }
          }
          super(objbuf, byteOffset, length);
          begin = byteOffset / bpel;
          end = begin + length;
          Atomics.store(p32, ptri + HINDEX_LENGTH, length);
          Atomics.store(p32, ptri + HINDEX_BYTEOFFSET, byteOffset);
          Atomics.store(p32, ptri + HINDEX_BYTELENGTH, byteLength);
          Atomics.store(p32, ptri + HINDEX_BEGIN, begin);
          Atomics.store(p32, ptri + HINDEX_END, end);
          Atomics.store(p32, ptri + HINDEX_LOCKFREE, 1);
          Atomics.notify(p32, ptri + HINDEX_LOCKFREE);
        }
        // WeakMap -> {TypedArray} => ptri
        resolvs.set(this, ptri);
      }

    };
    Int8Array = class Int8Array extends self.Int8Array {
      constructor(arg0, byteOffset, length) {
        var arg0ByteLength, arg0Length, arg0Offset, argc, begin, bpel, byteLength, copyEnd, copyStart, end, nextByteLength, ptri;
        ptri = resolvCall();
        argc = arguments.length;
        bpel = 1;
        if (isThread) {
          length = Atomics.load(p32, ptri + HINDEX_LENGTH);
          byteOffset = Atomics.load(p32, ptri + HINDEX_BYTEOFFSET);
          super(objbuf, byteOffset, length);
        } else if (isBridge) {
          if (argc === 1) {
            // new TypedArray( 24 );
            // new TypedArray( buffer );
            // new TypedArray( [ 2, 4, 1 ] );
            if (Number.isInteger(arg0)) {
              // new TypedArray( 24 );

              //Atomics.wait p32, 4, 0, 2240; #testing locks
              length = arg0;
              byteLength = length * bpel;
              byteOffset = malloc(byteLength, bpel);
            } else if (ArrayBuffer.isView(arg0)) {
              // new TypedArray( new TypedArray(?) );

              //Atomics.wait p32, 4, 0, 2240; #testing locks
              byteLength = arg0.byteLength;
              length = arg0.byteLength / bpel;
              byteOffset = malloc(byteLength, bpel);
              if (arg0.buffer === objbuf) {
                ui8.copyWithin(byteOffset, arg0.byteOffset, arg0.byteOffset + byteLength);
              } else {
                ui8.set(arg0, byteOffset);
              }
            } else if (Array.isArray) {
              // new TypedArray( [ 2, 4, 1 ] )

              //Atomics.wait p32, 4, 0, 2240; #testing locks
              length = arg0.length;
              byteLength = length * bpel;
              byteOffset = malloc(byteLength, bpel);
              ui8.set(arg0, byteOffset);
            }
          } else if (argc === 3) {
            // new TypedArray( buffer, 1221, 4 );
            // new TypedArray( new TypedArra( 2 ), 36, 2 );
            if (ArrayBuffer.isView(arg0)) {
              // new TypedArray( new TypedArra( 2 ), 36, 2 );
              copyStart = arg0.byteOffset + byteOffset;
              copyEnd = copyStart + length * bpel;
              byteLength = length * bpel;
              byteOffset = malloc(byteLength, bpel);
              if (arg0.buffer === objbuf) {
                ui8.copyWithin(byteOffset, copyStart, copyEnd);
              } else {
                ui8.set(new self.Uint8Array(arg0.buffer, copyStart, length), byteOffset);
              }
            } else if (arg0.byteLength) {
              // new TypedArray( buffer, 36, 2 );
              arg0Offset = byteOffset;
              byteLength = length * bpel;
              if (arg0 !== objbuf) {
                byteOffset = malloc(byteLength, bpel);
                ui8.set(new self.Uint8Array(arg0, arg0Offset, byteLength), byteOffset);
              }
            }
          } else if (argc === 2) {
            // new TypedArray( buffer, 36 );
            // new TypedArray( new TypedArra( 2 ), 36 );
            if (ArrayBuffer.isView(arg0)) {
              // new TypedArray( new TypedArra( 2 ), 36 );
              arg0Length = arg0.length;
              arg0ByteLength = arg0.BYTES_PER_ELEMENT * arg0Length;
              copyStart = arg0.byteOffset + byteOffset;
              copyEnd = copyStart + arg0ByteLength;
              nextByteLength = arg0ByteLength - byteOffset;
              byteLength = nextByteLength;
              length = byteLength / bpel;
              byteOffset = malloc(byteLength, bpel);
              if (arg0.buffer === objbuf) {
                ui8.copyWithin(byteOffset, copyStart, copyEnd);
              } else {
                ui8.set(arg0, byteOffset);
              }
            } else if (arg0.byteLength) {
              // new TypedArray( buffer, 36 );
              arg0Offset = byteOffset;
              byteLength = arg0.byteLength - byteOffset;
              length = byteLength / bpel;
              if (arg0 !== objbuf) {
                byteOffset = malloc(byteLength, bpel);
              }
              if (arg0 !== objbuf) {
                ui8.set(new self.Uint8Array(arg0, arg0Offset), byteOffset);
              }
            }
          }
          super(objbuf, byteOffset, length);
          begin = byteOffset / bpel;
          end = begin + length;
          Atomics.store(p32, ptri + HINDEX_LENGTH, length);
          Atomics.store(p32, ptri + HINDEX_BYTEOFFSET, byteOffset);
          Atomics.store(p32, ptri + HINDEX_BYTELENGTH, byteLength);
          Atomics.store(p32, ptri + HINDEX_BEGIN, begin);
          Atomics.store(p32, ptri + HINDEX_END, end);
          Atomics.store(p32, ptri + HINDEX_LOCKFREE, 1);
          Atomics.notify(p32, ptri + HINDEX_LOCKFREE);
        }
        // WeakMap -> {TypedArray} => ptri
        resolvs.set(this, ptri);
      }

    };
    Uint8ClampedArray = class Uint8ClampedArray extends self.Uint8ClampedArray {
      constructor(arg0, byteOffset, length) {
        var arg0ByteLength, arg0Length, arg0Offset, argc, begin, bpel, byteLength, copyEnd, copyStart, end, nextByteLength, ptri;
        ptri = resolvCall();
        argc = arguments.length;
        bpel = 1;
        if (isThread) {
          length = Atomics.load(p32, ptri + HINDEX_LENGTH);
          byteOffset = Atomics.load(p32, ptri + HINDEX_BYTEOFFSET);
          super(objbuf, byteOffset, length);
        } else if (isBridge) {
          if (argc === 1) {
            // new TypedArray( 24 );
            // new TypedArray( buffer );
            // new TypedArray( [ 2, 4, 1 ] );
            if (Number.isInteger(arg0)) {
              // new TypedArray( 24 );

              //Atomics.wait p32, 4, 0, 2240; #testing locks
              length = arg0;
              byteLength = length * bpel;
              byteOffset = malloc(byteLength, bpel);
            } else if (ArrayBuffer.isView(arg0)) {
              // new TypedArray( new TypedArray(?) );

              //Atomics.wait p32, 4, 0, 2240; #testing locks
              byteLength = arg0.byteLength;
              length = arg0.byteLength / bpel;
              byteOffset = malloc(byteLength, bpel);
              if (arg0.buffer === objbuf) {
                ui8.copyWithin(byteOffset, arg0.byteOffset, arg0.byteOffset + byteLength);
              } else {
                ui8.set(arg0, byteOffset);
              }
            } else if (Array.isArray) {
              // new TypedArray( [ 2, 4, 1 ] )

              //Atomics.wait p32, 4, 0, 2240; #testing locks
              length = arg0.length;
              byteLength = length * bpel;
              byteOffset = malloc(byteLength, bpel);
              ui8.set(arg0, byteOffset);
            }
          } else if (argc === 3) {
            // new TypedArray( buffer, 1221, 4 );
            // new TypedArray( new TypedArra( 2 ), 36, 2 );
            if (ArrayBuffer.isView(arg0)) {
              // new TypedArray( new TypedArra( 2 ), 36, 2 );
              copyStart = arg0.byteOffset + byteOffset;
              copyEnd = copyStart + length * bpel;
              byteLength = length * bpel;
              byteOffset = malloc(byteLength, bpel);
              if (arg0.buffer === objbuf) {
                ui8.copyWithin(byteOffset, copyStart, copyEnd);
              } else {
                ui8.set(new self.Uint8Array(arg0.buffer, copyStart, length), byteOffset);
              }
            } else if (arg0.byteLength) {
              // new TypedArray( buffer, 36, 2 );
              arg0Offset = byteOffset;
              byteLength = length * bpel;
              if (arg0 !== objbuf) {
                byteOffset = malloc(byteLength, bpel);
                ui8.set(new self.Uint8Array(arg0, arg0Offset, byteLength), byteOffset);
              }
            }
          } else if (argc === 2) {
            // new TypedArray( buffer, 36 );
            // new TypedArray( new TypedArra( 2 ), 36 );
            if (ArrayBuffer.isView(arg0)) {
              // new TypedArray( new TypedArra( 2 ), 36 );
              arg0Length = arg0.length;
              arg0ByteLength = arg0.BYTES_PER_ELEMENT * arg0Length;
              copyStart = arg0.byteOffset + byteOffset;
              copyEnd = copyStart + arg0ByteLength;
              nextByteLength = arg0ByteLength - byteOffset;
              byteLength = nextByteLength;
              length = byteLength / bpel;
              byteOffset = malloc(byteLength, bpel);
              if (arg0.buffer === objbuf) {
                ui8.copyWithin(byteOffset, copyStart, copyEnd);
              } else {
                ui8.set(arg0, byteOffset);
              }
            } else if (arg0.byteLength) {
              // new TypedArray( buffer, 36 );
              arg0Offset = byteOffset;
              byteLength = arg0.byteLength - byteOffset;
              length = byteLength / bpel;
              if (arg0 !== objbuf) {
                byteOffset = malloc(byteLength, bpel);
              }
              if (arg0 !== objbuf) {
                ui8.set(new self.Uint8Array(arg0, arg0Offset), byteOffset);
              }
            }
          }
          super(objbuf, byteOffset, length);
          begin = byteOffset / bpel;
          end = begin + length;
          Atomics.store(p32, ptri + HINDEX_LENGTH, length);
          Atomics.store(p32, ptri + HINDEX_BYTEOFFSET, byteOffset);
          Atomics.store(p32, ptri + HINDEX_BYTELENGTH, byteLength);
          Atomics.store(p32, ptri + HINDEX_BEGIN, begin);
          Atomics.store(p32, ptri + HINDEX_END, end);
          Atomics.store(p32, ptri + HINDEX_LOCKFREE, 1);
          Atomics.notify(p32, ptri + HINDEX_LOCKFREE);
        }
        // WeakMap -> {TypedArray} => ptri
        resolvs.set(this, ptri);
      }

    };
    Uint16Array = class Uint16Array extends self.Uint16Array {
      constructor(arg0, byteOffset, length) {
        var arg0ByteLength, arg0Length, arg0Offset, argc, begin, bpel, byteLength, copyEnd, copyStart, end, nextByteLength, ptri;
        ptri = resolvCall();
        argc = arguments.length;
        bpel = 2;
        if (isThread) {
          length = Atomics.load(p32, ptri + HINDEX_LENGTH);
          byteOffset = Atomics.load(p32, ptri + HINDEX_BYTEOFFSET);
          super(objbuf, byteOffset, length);
        } else if (isBridge) {
          if (argc === 1) {
            // new TypedArray( 24 );
            // new TypedArray( buffer );
            // new TypedArray( [ 2, 4, 1 ] );
            if (Number.isInteger(arg0)) {
              // new TypedArray( 24 );

              //Atomics.wait p32, 4, 0, 2240; #testing locks
              length = arg0;
              byteLength = length * bpel;
              byteOffset = malloc(byteLength, bpel);
            } else if (ArrayBuffer.isView(arg0)) {
              // new TypedArray( new TypedArray(?) );

              //Atomics.wait p32, 4, 0, 2240; #testing locks
              byteLength = arg0.byteLength;
              length = arg0.byteLength / bpel;
              byteOffset = malloc(byteLength, bpel);
              if (arg0.buffer === objbuf) {
                ui8.copyWithin(byteOffset, arg0.byteOffset, arg0.byteOffset + byteLength);
              } else {
                ui8.set(arg0, byteOffset);
              }
            } else if (Array.isArray) {
              // new TypedArray( [ 2, 4, 1 ] )

              //Atomics.wait p32, 4, 0, 2240; #testing locks
              length = arg0.length;
              byteLength = length * bpel;
              byteOffset = malloc(byteLength, bpel);
              ui8.set(arg0, byteOffset);
            }
          } else if (argc === 3) {
            // new TypedArray( buffer, 1221, 4 );
            // new TypedArray( new TypedArra( 2 ), 36, 2 );
            if (ArrayBuffer.isView(arg0)) {
              // new TypedArray( new TypedArra( 2 ), 36, 2 );
              copyStart = arg0.byteOffset + byteOffset;
              copyEnd = copyStart + length * bpel;
              byteLength = length * bpel;
              byteOffset = malloc(byteLength, bpel);
              if (arg0.buffer === objbuf) {
                ui8.copyWithin(byteOffset, copyStart, copyEnd);
              } else {
                ui8.set(new self.Uint8Array(arg0.buffer, copyStart, length), byteOffset);
              }
            } else if (arg0.byteLength) {
              // new TypedArray( buffer, 36, 2 );
              arg0Offset = byteOffset;
              byteLength = length * bpel;
              if (arg0 !== objbuf) {
                byteOffset = malloc(byteLength, bpel);
                ui8.set(new self.Uint8Array(arg0, arg0Offset, byteLength), byteOffset);
              }
            }
          } else if (argc === 2) {
            // new TypedArray( buffer, 36 );
            // new TypedArray( new TypedArra( 2 ), 36 );
            if (ArrayBuffer.isView(arg0)) {
              // new TypedArray( new TypedArra( 2 ), 36 );
              arg0Length = arg0.length;
              arg0ByteLength = arg0.BYTES_PER_ELEMENT * arg0Length;
              copyStart = arg0.byteOffset + byteOffset;
              copyEnd = copyStart + arg0ByteLength;
              nextByteLength = arg0ByteLength - byteOffset;
              byteLength = nextByteLength;
              length = byteLength / bpel;
              byteOffset = malloc(byteLength, bpel);
              if (arg0.buffer === objbuf) {
                ui8.copyWithin(byteOffset, copyStart, copyEnd);
              } else {
                ui8.set(arg0, byteOffset);
              }
            } else if (arg0.byteLength) {
              // new TypedArray( buffer, 36 );
              arg0Offset = byteOffset;
              byteLength = arg0.byteLength - byteOffset;
              length = byteLength / bpel;
              if (arg0 !== objbuf) {
                byteOffset = malloc(byteLength, bpel);
              }
              if (arg0 !== objbuf) {
                ui8.set(new self.Uint8Array(arg0, arg0Offset), byteOffset);
              }
            }
          }
          super(objbuf, byteOffset, length);
          begin = byteOffset / bpel;
          end = begin + length;
          Atomics.store(p32, ptri + HINDEX_LENGTH, length);
          Atomics.store(p32, ptri + HINDEX_BYTEOFFSET, byteOffset);
          Atomics.store(p32, ptri + HINDEX_BYTELENGTH, byteLength);
          Atomics.store(p32, ptri + HINDEX_BEGIN, begin);
          Atomics.store(p32, ptri + HINDEX_END, end);
          Atomics.store(p32, ptri + HINDEX_LOCKFREE, 1);
          Atomics.notify(p32, ptri + HINDEX_LOCKFREE);
        }
        // WeakMap -> {TypedArray} => ptri
        resolvs.set(this, ptri);
      }

    };
    Int16Array = class Int16Array extends self.Int16Array {
      constructor(arg0, byteOffset, length) {
        var arg0ByteLength, arg0Length, arg0Offset, argc, begin, bpel, byteLength, copyEnd, copyStart, end, nextByteLength, ptri;
        ptri = resolvCall();
        argc = arguments.length;
        bpel = 2;
        if (isThread) {
          length = Atomics.load(p32, ptri + HINDEX_LENGTH);
          byteOffset = Atomics.load(p32, ptri + HINDEX_BYTEOFFSET);
          super(objbuf, byteOffset, length);
        } else if (isBridge) {
          if (argc === 1) {
            // new TypedArray( 24 );
            // new TypedArray( buffer );
            // new TypedArray( [ 2, 4, 1 ] );
            if (Number.isInteger(arg0)) {
              // new TypedArray( 24 );

              //Atomics.wait p32, 4, 0, 2240; #testing locks
              length = arg0;
              byteLength = length * bpel;
              byteOffset = malloc(byteLength, bpel);
            } else if (ArrayBuffer.isView(arg0)) {
              // new TypedArray( new TypedArray(?) );

              //Atomics.wait p32, 4, 0, 2240; #testing locks
              byteLength = arg0.byteLength;
              length = arg0.byteLength / bpel;
              byteOffset = malloc(byteLength, bpel);
              if (arg0.buffer === objbuf) {
                ui8.copyWithin(byteOffset, arg0.byteOffset, arg0.byteOffset + byteLength);
              } else {
                ui8.set(arg0, byteOffset);
              }
            } else if (Array.isArray) {
              // new TypedArray( [ 2, 4, 1 ] )

              //Atomics.wait p32, 4, 0, 2240; #testing locks
              length = arg0.length;
              byteLength = length * bpel;
              byteOffset = malloc(byteLength, bpel);
              ui8.set(arg0, byteOffset);
            }
          } else if (argc === 3) {
            // new TypedArray( buffer, 1221, 4 );
            // new TypedArray( new TypedArra( 2 ), 36, 2 );
            if (ArrayBuffer.isView(arg0)) {
              // new TypedArray( new TypedArra( 2 ), 36, 2 );
              copyStart = arg0.byteOffset + byteOffset;
              copyEnd = copyStart + length * bpel;
              byteLength = length * bpel;
              byteOffset = malloc(byteLength, bpel);
              if (arg0.buffer === objbuf) {
                ui8.copyWithin(byteOffset, copyStart, copyEnd);
              } else {
                ui8.set(new self.Uint8Array(arg0.buffer, copyStart, length), byteOffset);
              }
            } else if (arg0.byteLength) {
              // new TypedArray( buffer, 36, 2 );
              arg0Offset = byteOffset;
              byteLength = length * bpel;
              if (arg0 !== objbuf) {
                byteOffset = malloc(byteLength, bpel);
                ui8.set(new self.Uint8Array(arg0, arg0Offset, byteLength), byteOffset);
              }
            }
          } else if (argc === 2) {
            // new TypedArray( buffer, 36 );
            // new TypedArray( new TypedArra( 2 ), 36 );
            if (ArrayBuffer.isView(arg0)) {
              // new TypedArray( new TypedArra( 2 ), 36 );
              arg0Length = arg0.length;
              arg0ByteLength = arg0.BYTES_PER_ELEMENT * arg0Length;
              copyStart = arg0.byteOffset + byteOffset;
              copyEnd = copyStart + arg0ByteLength;
              nextByteLength = arg0ByteLength - byteOffset;
              byteLength = nextByteLength;
              length = byteLength / bpel;
              byteOffset = malloc(byteLength, bpel);
              if (arg0.buffer === objbuf) {
                ui8.copyWithin(byteOffset, copyStart, copyEnd);
              } else {
                ui8.set(arg0, byteOffset);
              }
            } else if (arg0.byteLength) {
              // new TypedArray( buffer, 36 );
              arg0Offset = byteOffset;
              byteLength = arg0.byteLength - byteOffset;
              length = byteLength / bpel;
              if (arg0 !== objbuf) {
                byteOffset = malloc(byteLength, bpel);
              }
              if (arg0 !== objbuf) {
                ui8.set(new self.Uint8Array(arg0, arg0Offset), byteOffset);
              }
            }
          }
          super(objbuf, byteOffset, length);
          begin = byteOffset / bpel;
          end = begin + length;
          Atomics.store(p32, ptri + HINDEX_LENGTH, length);
          Atomics.store(p32, ptri + HINDEX_BYTEOFFSET, byteOffset);
          Atomics.store(p32, ptri + HINDEX_BYTELENGTH, byteLength);
          Atomics.store(p32, ptri + HINDEX_BEGIN, begin);
          Atomics.store(p32, ptri + HINDEX_END, end);
          Atomics.store(p32, ptri + HINDEX_LOCKFREE, 1);
          Atomics.notify(p32, ptri + HINDEX_LOCKFREE);
        }
        // WeakMap -> {TypedArray} => ptri
        resolvs.set(this, ptri);
      }

    };
    Uint32Array = class Uint32Array extends self.Uint32Array {
      constructor(arg0, byteOffset, length) {
        var arg0ByteLength, arg0Length, arg0Offset, argc, begin, bpel, byteLength, copyEnd, copyStart, end, nextByteLength, ptri;
        ptri = resolvCall();
        argc = arguments.length;
        bpel = 4;
        if (isThread) {
          length = Atomics.load(p32, ptri + HINDEX_LENGTH);
          byteOffset = Atomics.load(p32, ptri + HINDEX_BYTEOFFSET);
          super(objbuf, byteOffset, length);
        } else if (isBridge) {
          if (argc === 1) {
            // new TypedArray( 24 );
            // new TypedArray( buffer );
            // new TypedArray( [ 2, 4, 1 ] );
            if (Number.isInteger(arg0)) {
              // new TypedArray( 24 );

              //Atomics.wait p32, 4, 0, 2240; #testing locks
              length = arg0;
              byteLength = length * bpel;
              byteOffset = malloc(byteLength, bpel);
            } else if (ArrayBuffer.isView(arg0)) {
              // new TypedArray( new TypedArray(?) );

              //Atomics.wait p32, 4, 0, 2240; #testing locks
              byteLength = arg0.byteLength;
              length = arg0.byteLength / bpel;
              byteOffset = malloc(byteLength, bpel);
              if (arg0.buffer === objbuf) {
                ui8.copyWithin(byteOffset, arg0.byteOffset, arg0.byteOffset + byteLength);
              } else {
                ui8.set(arg0, byteOffset);
              }
            } else if (Array.isArray) {
              // new TypedArray( [ 2, 4, 1 ] )

              //Atomics.wait p32, 4, 0, 2240; #testing locks
              length = arg0.length;
              byteLength = length * bpel;
              byteOffset = malloc(byteLength, bpel);
              ui8.set(arg0, byteOffset);
            }
          } else if (argc === 3) {
            // new TypedArray( buffer, 1221, 4 );
            // new TypedArray( new TypedArra( 2 ), 36, 2 );
            if (ArrayBuffer.isView(arg0)) {
              // new TypedArray( new TypedArra( 2 ), 36, 2 );
              copyStart = arg0.byteOffset + byteOffset;
              copyEnd = copyStart + length * bpel;
              byteLength = length * bpel;
              byteOffset = malloc(byteLength, bpel);
              if (arg0.buffer === objbuf) {
                ui8.copyWithin(byteOffset, copyStart, copyEnd);
              } else {
                ui8.set(new self.Uint8Array(arg0.buffer, copyStart, length), byteOffset);
              }
            } else if (arg0.byteLength) {
              // new TypedArray( buffer, 36, 2 );
              arg0Offset = byteOffset;
              byteLength = length * bpel;
              if (arg0 !== objbuf) {
                byteOffset = malloc(byteLength, bpel);
                ui8.set(new self.Uint8Array(arg0, arg0Offset, byteLength), byteOffset);
              }
            }
          } else if (argc === 2) {
            // new TypedArray( buffer, 36 );
            // new TypedArray( new TypedArra( 2 ), 36 );
            if (ArrayBuffer.isView(arg0)) {
              // new TypedArray( new TypedArra( 2 ), 36 );
              arg0Length = arg0.length;
              arg0ByteLength = arg0.BYTES_PER_ELEMENT * arg0Length;
              copyStart = arg0.byteOffset + byteOffset;
              copyEnd = copyStart + arg0ByteLength;
              nextByteLength = arg0ByteLength - byteOffset;
              byteLength = nextByteLength;
              length = byteLength / bpel;
              byteOffset = malloc(byteLength, bpel);
              if (arg0.buffer === objbuf) {
                ui8.copyWithin(byteOffset, copyStart, copyEnd);
              } else {
                ui8.set(arg0, byteOffset);
              }
            } else if (arg0.byteLength) {
              // new TypedArray( buffer, 36 );
              arg0Offset = byteOffset;
              byteLength = arg0.byteLength - byteOffset;
              length = byteLength / bpel;
              if (arg0 !== objbuf) {
                byteOffset = malloc(byteLength, bpel);
              }
              if (arg0 !== objbuf) {
                ui8.set(new self.Uint8Array(arg0, arg0Offset), byteOffset);
              }
            }
          }
          super(objbuf, byteOffset, length);
          begin = byteOffset / bpel;
          end = begin + length;
          Atomics.store(p32, ptri + HINDEX_LENGTH, length);
          Atomics.store(p32, ptri + HINDEX_BYTEOFFSET, byteOffset);
          Atomics.store(p32, ptri + HINDEX_BYTELENGTH, byteLength);
          Atomics.store(p32, ptri + HINDEX_BEGIN, begin);
          Atomics.store(p32, ptri + HINDEX_END, end);
          Atomics.store(p32, ptri + HINDEX_LOCKFREE, 1);
          Atomics.notify(p32, ptri + HINDEX_LOCKFREE);
        }
        // WeakMap -> {TypedArray} => ptri
        resolvs.set(this, ptri);
      }

    };
    Int32Array = class Int32Array extends self.Int32Array {
      constructor(arg0, byteOffset, length) {
        var arg0ByteLength, arg0Length, arg0Offset, argc, begin, bpel, byteLength, copyEnd, copyStart, end, nextByteLength, ptri;
        ptri = resolvCall();
        argc = arguments.length;
        bpel = 4;
        if (isThread) {
          length = Atomics.load(p32, ptri + HINDEX_LENGTH);
          byteOffset = Atomics.load(p32, ptri + HINDEX_BYTEOFFSET);
          super(objbuf, byteOffset, length);
        } else if (isBridge) {
          if (argc === 1) {
            // new TypedArray( 24 );
            // new TypedArray( buffer );
            // new TypedArray( [ 2, 4, 1 ] );
            if (Number.isInteger(arg0)) {
              // new TypedArray( 24 );

              //Atomics.wait p32, 4, 0, 2240; #testing locks
              length = arg0;
              byteLength = length * bpel;
              byteOffset = malloc(byteLength, bpel);
            } else if (ArrayBuffer.isView(arg0)) {
              // new TypedArray( new TypedArray(?) );

              //Atomics.wait p32, 4, 0, 2240; #testing locks
              byteLength = arg0.byteLength;
              length = arg0.byteLength / bpel;
              byteOffset = malloc(byteLength, bpel);
              if (arg0.buffer === objbuf) {
                ui8.copyWithin(byteOffset, arg0.byteOffset, arg0.byteOffset + byteLength);
              } else {
                ui8.set(arg0, byteOffset);
              }
            } else if (Array.isArray) {
              // new TypedArray( [ 2, 4, 1 ] )

              //Atomics.wait p32, 4, 0, 2240; #testing locks
              length = arg0.length;
              byteLength = length * bpel;
              byteOffset = malloc(byteLength, bpel);
              ui8.set(arg0, byteOffset);
            }
          } else if (argc === 3) {
            // new TypedArray( buffer, 1221, 4 );
            // new TypedArray( new TypedArra( 2 ), 36, 2 );
            if (ArrayBuffer.isView(arg0)) {
              // new TypedArray( new TypedArra( 2 ), 36, 2 );
              copyStart = arg0.byteOffset + byteOffset;
              copyEnd = copyStart + length * bpel;
              byteLength = length * bpel;
              byteOffset = malloc(byteLength, bpel);
              if (arg0.buffer === objbuf) {
                ui8.copyWithin(byteOffset, copyStart, copyEnd);
              } else {
                ui8.set(new self.Uint8Array(arg0.buffer, copyStart, length), byteOffset);
              }
            } else if (arg0.byteLength) {
              // new TypedArray( buffer, 36, 2 );
              arg0Offset = byteOffset;
              byteLength = length * bpel;
              if (arg0 !== objbuf) {
                byteOffset = malloc(byteLength, bpel);
                ui8.set(new self.Uint8Array(arg0, arg0Offset, byteLength), byteOffset);
              }
            }
          } else if (argc === 2) {
            // new TypedArray( buffer, 36 );
            // new TypedArray( new TypedArra( 2 ), 36 );
            if (ArrayBuffer.isView(arg0)) {
              // new TypedArray( new TypedArra( 2 ), 36 );
              arg0Length = arg0.length;
              arg0ByteLength = arg0.BYTES_PER_ELEMENT * arg0Length;
              copyStart = arg0.byteOffset + byteOffset;
              copyEnd = copyStart + arg0ByteLength;
              nextByteLength = arg0ByteLength - byteOffset;
              byteLength = nextByteLength;
              length = byteLength / bpel;
              byteOffset = malloc(byteLength, bpel);
              if (arg0.buffer === objbuf) {
                ui8.copyWithin(byteOffset, copyStart, copyEnd);
              } else {
                ui8.set(arg0, byteOffset);
              }
            } else if (arg0.byteLength) {
              // new TypedArray( buffer, 36 );
              arg0Offset = byteOffset;
              byteLength = arg0.byteLength - byteOffset;
              length = byteLength / bpel;
              if (arg0 !== objbuf) {
                byteOffset = malloc(byteLength, bpel);
              }
              if (arg0 !== objbuf) {
                ui8.set(new self.Uint8Array(arg0, arg0Offset), byteOffset);
              }
            }
          }
          super(objbuf, byteOffset, length);
          begin = byteOffset / bpel;
          end = begin + length;
          Atomics.store(p32, ptri + HINDEX_LENGTH, length);
          Atomics.store(p32, ptri + HINDEX_BYTEOFFSET, byteOffset);
          Atomics.store(p32, ptri + HINDEX_BYTELENGTH, byteLength);
          Atomics.store(p32, ptri + HINDEX_BEGIN, begin);
          Atomics.store(p32, ptri + HINDEX_END, end);
          Atomics.store(p32, ptri + HINDEX_LOCKFREE, 1);
          Atomics.notify(p32, ptri + HINDEX_LOCKFREE);
        }
        // WeakMap -> {TypedArray} => ptri
        resolvs.set(this, ptri);
      }

    };
    Float32Array = class Float32Array extends self.Float32Array {
      constructor(arg0, byteOffset, length) {
        var arg0ByteLength, arg0Length, arg0Offset, argc, begin, bpel, byteLength, copyEnd, copyStart, end, nextByteLength, ptri;
        ptri = resolvCall();
        argc = arguments.length;
        bpel = 4;
        if (isThread) {
          length = Atomics.load(p32, ptri + HINDEX_LENGTH);
          byteOffset = Atomics.load(p32, ptri + HINDEX_BYTEOFFSET);
          super(objbuf, byteOffset, length);
        } else if (isBridge) {
          if (argc === 1) {
            // new TypedArray( 24 );
            // new TypedArray( buffer );
            // new TypedArray( [ 2, 4, 1 ] );
            if (Number.isInteger(arg0)) {
              // new TypedArray( 24 );

              //Atomics.wait p32, 4, 0, 2240; #testing locks
              length = arg0;
              byteLength = length * bpel;
              byteOffset = malloc(byteLength, bpel);
            } else if (ArrayBuffer.isView(arg0)) {
              // new TypedArray( new TypedArray(?) );

              //Atomics.wait p32, 4, 0, 2240; #testing locks
              byteLength = arg0.byteLength;
              length = arg0.byteLength / bpel;
              byteOffset = malloc(byteLength, bpel);
              if (arg0.buffer === objbuf) {
                ui8.copyWithin(byteOffset, arg0.byteOffset, arg0.byteOffset + byteLength);
              } else {
                ui8.set(arg0, byteOffset);
              }
            } else if (Array.isArray) {
              // new TypedArray( [ 2, 4, 1 ] )

              //Atomics.wait p32, 4, 0, 2240; #testing locks
              length = arg0.length;
              byteLength = length * bpel;
              byteOffset = malloc(byteLength, bpel);
              ui8.set(arg0, byteOffset);
            }
          } else if (argc === 3) {
            // new TypedArray( buffer, 1221, 4 );
            // new TypedArray( new TypedArra( 2 ), 36, 2 );
            if (ArrayBuffer.isView(arg0)) {
              // new TypedArray( new TypedArra( 2 ), 36, 2 );
              copyStart = arg0.byteOffset + byteOffset;
              copyEnd = copyStart + length * bpel;
              byteLength = length * bpel;
              byteOffset = malloc(byteLength, bpel);
              if (arg0.buffer === objbuf) {
                ui8.copyWithin(byteOffset, copyStart, copyEnd);
              } else {
                ui8.set(new self.Uint8Array(arg0.buffer, copyStart, length), byteOffset);
              }
            } else if (arg0.byteLength) {
              // new TypedArray( buffer, 36, 2 );
              arg0Offset = byteOffset;
              byteLength = length * bpel;
              if (arg0 !== objbuf) {
                byteOffset = malloc(byteLength, bpel);
                ui8.set(new self.Uint8Array(arg0, arg0Offset, byteLength), byteOffset);
              }
            }
          } else if (argc === 2) {
            // new TypedArray( buffer, 36 );
            // new TypedArray( new TypedArra( 2 ), 36 );
            if (ArrayBuffer.isView(arg0)) {
              // new TypedArray( new TypedArra( 2 ), 36 );
              arg0Length = arg0.length;
              arg0ByteLength = arg0.BYTES_PER_ELEMENT * arg0Length;
              copyStart = arg0.byteOffset + byteOffset;
              copyEnd = copyStart + arg0ByteLength;
              nextByteLength = arg0ByteLength - byteOffset;
              byteLength = nextByteLength;
              length = byteLength / bpel;
              byteOffset = malloc(byteLength, bpel);
              if (arg0.buffer === objbuf) {
                ui8.copyWithin(byteOffset, copyStart, copyEnd);
              } else {
                ui8.set(arg0, byteOffset);
              }
            } else if (arg0.byteLength) {
              // new TypedArray( buffer, 36 );
              arg0Offset = byteOffset;
              byteLength = arg0.byteLength - byteOffset;
              length = byteLength / bpel;
              if (arg0 !== objbuf) {
                byteOffset = malloc(byteLength, bpel);
              }
              if (arg0 !== objbuf) {
                ui8.set(new self.Uint8Array(arg0, arg0Offset), byteOffset);
              }
            }
          }
          super(objbuf, byteOffset, length);
          begin = byteOffset / bpel;
          end = begin + length;
          Atomics.store(p32, ptri + HINDEX_LENGTH, length);
          Atomics.store(p32, ptri + HINDEX_BYTEOFFSET, byteOffset);
          Atomics.store(p32, ptri + HINDEX_BYTELENGTH, byteLength);
          Atomics.store(p32, ptri + HINDEX_BEGIN, begin);
          Atomics.store(p32, ptri + HINDEX_END, end);
          Atomics.store(p32, ptri + HINDEX_LOCKFREE, 1);
          Atomics.notify(p32, ptri + HINDEX_LOCKFREE);
        }
        // WeakMap -> {TypedArray} => ptri
        resolvs.set(this, ptri);
      }

    };
    Float64Array = class Float64Array extends self.Float64Array {
      constructor(arg0, byteOffset, length) {
        var arg0ByteLength, arg0Length, arg0Offset, argc, begin, bpel, byteLength, copyEnd, copyStart, end, nextByteLength, ptri;
        ptri = resolvCall();
        argc = arguments.length;
        bpel = 8;
        if (isThread) {
          length = Atomics.load(p32, ptri + HINDEX_LENGTH);
          byteOffset = Atomics.load(p32, ptri + HINDEX_BYTEOFFSET);
          super(objbuf, byteOffset, length);
        } else if (isBridge) {
          if (argc === 1) {
            // new TypedArray( 24 );
            // new TypedArray( buffer );
            // new TypedArray( [ 2, 4, 1 ] );
            if (Number.isInteger(arg0)) {
              // new TypedArray( 24 );

              //Atomics.wait p32, 4, 0, 2240; #testing locks
              length = arg0;
              byteLength = length * bpel;
              byteOffset = malloc(byteLength, bpel);
            } else if (ArrayBuffer.isView(arg0)) {
              // new TypedArray( new TypedArray(?) );

              //Atomics.wait p32, 4, 0, 2240; #testing locks
              byteLength = arg0.byteLength;
              length = arg0.byteLength / bpel;
              byteOffset = malloc(byteLength, bpel);
              if (arg0.buffer === objbuf) {
                ui8.copyWithin(byteOffset, arg0.byteOffset, arg0.byteOffset + byteLength);
              } else {
                ui8.set(arg0, byteOffset);
              }
            } else if (Array.isArray) {
              // new TypedArray( [ 2, 4, 1 ] )

              //Atomics.wait p32, 4, 0, 2240; #testing locks
              length = arg0.length;
              byteLength = length * bpel;
              byteOffset = malloc(byteLength, bpel);
              ui8.set(arg0, byteOffset);
            }
          } else if (argc === 3) {
            // new TypedArray( buffer, 1221, 4 );
            // new TypedArray( new TypedArra( 2 ), 36, 2 );
            if (ArrayBuffer.isView(arg0)) {
              // new TypedArray( new TypedArra( 2 ), 36, 2 );
              copyStart = arg0.byteOffset + byteOffset;
              copyEnd = copyStart + length * bpel;
              byteLength = length * bpel;
              byteOffset = malloc(byteLength, bpel);
              if (arg0.buffer === objbuf) {
                ui8.copyWithin(byteOffset, copyStart, copyEnd);
              } else {
                ui8.set(new self.Uint8Array(arg0.buffer, copyStart, length), byteOffset);
              }
            } else if (arg0.byteLength) {
              // new TypedArray( buffer, 36, 2 );
              arg0Offset = byteOffset;
              byteLength = length * bpel;
              if (arg0 !== objbuf) {
                byteOffset = malloc(byteLength, bpel);
                ui8.set(new self.Uint8Array(arg0, arg0Offset, byteLength), byteOffset);
              }
            }
          } else if (argc === 2) {
            // new TypedArray( buffer, 36 );
            // new TypedArray( new TypedArra( 2 ), 36 );
            if (ArrayBuffer.isView(arg0)) {
              // new TypedArray( new TypedArra( 2 ), 36 );
              arg0Length = arg0.length;
              arg0ByteLength = arg0.BYTES_PER_ELEMENT * arg0Length;
              copyStart = arg0.byteOffset + byteOffset;
              copyEnd = copyStart + arg0ByteLength;
              nextByteLength = arg0ByteLength - byteOffset;
              byteLength = nextByteLength;
              length = byteLength / bpel;
              byteOffset = malloc(byteLength, bpel);
              if (arg0.buffer === objbuf) {
                ui8.copyWithin(byteOffset, copyStart, copyEnd);
              } else {
                ui8.set(arg0, byteOffset);
              }
            } else if (arg0.byteLength) {
              // new TypedArray( buffer, 36 );
              arg0Offset = byteOffset;
              byteLength = arg0.byteLength - byteOffset;
              length = byteLength / bpel;
              if (arg0 !== objbuf) {
                byteOffset = malloc(byteLength, bpel);
              }
              if (arg0 !== objbuf) {
                ui8.set(new self.Uint8Array(arg0, arg0Offset), byteOffset);
              }
            }
          }
          super(objbuf, byteOffset, length);
          begin = byteOffset / bpel;
          end = begin + length;
          Atomics.store(p32, ptri + HINDEX_LENGTH, length);
          Atomics.store(p32, ptri + HINDEX_BYTEOFFSET, byteOffset);
          Atomics.store(p32, ptri + HINDEX_BYTELENGTH, byteLength);
          Atomics.store(p32, ptri + HINDEX_BEGIN, begin);
          Atomics.store(p32, ptri + HINDEX_END, end);
          Atomics.store(p32, ptri + HINDEX_LOCKFREE, 1);
          Atomics.notify(p32, ptri + HINDEX_LOCKFREE);
        }
        // WeakMap -> {TypedArray} => ptri
        resolvs.set(this, ptri);
      }

    };
    BigInt64Array = class BigInt64Array extends self.BigInt64Array {
      constructor(arg0, byteOffset, length) {
        var arg0ByteLength, arg0Length, arg0Offset, argc, begin, bpel, byteLength, copyEnd, copyStart, end, nextByteLength, ptri;
        ptri = resolvCall();
        argc = arguments.length;
        bpel = 8;
        if (isThread) {
          length = Atomics.load(p32, ptri + HINDEX_LENGTH);
          byteOffset = Atomics.load(p32, ptri + HINDEX_BYTEOFFSET);
          super(objbuf, byteOffset, length);
        } else if (isBridge) {
          if (argc === 1) {
            // new TypedArray( 24 );
            // new TypedArray( buffer );
            // new TypedArray( [ 2, 4, 1 ] );
            if (Number.isInteger(arg0)) {
              // new TypedArray( 24 );

              //Atomics.wait p32, 4, 0, 2240; #testing locks
              length = arg0;
              byteLength = length * bpel;
              byteOffset = malloc(byteLength, bpel);
            } else if (ArrayBuffer.isView(arg0)) {
              // new TypedArray( new TypedArray(?) );

              //Atomics.wait p32, 4, 0, 2240; #testing locks
              byteLength = arg0.byteLength;
              length = arg0.byteLength / bpel;
              byteOffset = malloc(byteLength, bpel);
              if (arg0.buffer === objbuf) {
                ui8.copyWithin(byteOffset, arg0.byteOffset, arg0.byteOffset + byteLength);
              } else {
                ui8.set(arg0, byteOffset);
              }
            } else if (Array.isArray) {
              // new TypedArray( [ 2, 4, 1 ] )

              //Atomics.wait p32, 4, 0, 2240; #testing locks
              length = arg0.length;
              byteLength = length * bpel;
              byteOffset = malloc(byteLength, bpel);
              ui8.set(arg0, byteOffset);
            }
          } else if (argc === 3) {
            // new TypedArray( buffer, 1221, 4 );
            // new TypedArray( new TypedArra( 2 ), 36, 2 );
            if (ArrayBuffer.isView(arg0)) {
              // new TypedArray( new TypedArra( 2 ), 36, 2 );
              copyStart = arg0.byteOffset + byteOffset;
              copyEnd = copyStart + length * bpel;
              byteLength = length * bpel;
              byteOffset = malloc(byteLength, bpel);
              if (arg0.buffer === objbuf) {
                ui8.copyWithin(byteOffset, copyStart, copyEnd);
              } else {
                ui8.set(new self.Uint8Array(arg0.buffer, copyStart, length), byteOffset);
              }
            } else if (arg0.byteLength) {
              // new TypedArray( buffer, 36, 2 );
              arg0Offset = byteOffset;
              byteLength = length * bpel;
              if (arg0 !== objbuf) {
                byteOffset = malloc(byteLength, bpel);
                ui8.set(new self.Uint8Array(arg0, arg0Offset, byteLength), byteOffset);
              }
            }
          } else if (argc === 2) {
            // new TypedArray( buffer, 36 );
            // new TypedArray( new TypedArra( 2 ), 36 );
            if (ArrayBuffer.isView(arg0)) {
              // new TypedArray( new TypedArra( 2 ), 36 );
              arg0Length = arg0.length;
              arg0ByteLength = arg0.BYTES_PER_ELEMENT * arg0Length;
              copyStart = arg0.byteOffset + byteOffset;
              copyEnd = copyStart + arg0ByteLength;
              nextByteLength = arg0ByteLength - byteOffset;
              byteLength = nextByteLength;
              length = byteLength / bpel;
              byteOffset = malloc(byteLength, bpel);
              if (arg0.buffer === objbuf) {
                ui8.copyWithin(byteOffset, copyStart, copyEnd);
              } else {
                ui8.set(arg0, byteOffset);
              }
            } else if (arg0.byteLength) {
              // new TypedArray( buffer, 36 );
              arg0Offset = byteOffset;
              byteLength = arg0.byteLength - byteOffset;
              length = byteLength / bpel;
              if (arg0 !== objbuf) {
                byteOffset = malloc(byteLength, bpel);
              }
              if (arg0 !== objbuf) {
                ui8.set(new self.Uint8Array(arg0, arg0Offset), byteOffset);
              }
            }
          }
          super(objbuf, byteOffset, length);
          begin = byteOffset / bpel;
          end = begin + length;
          Atomics.store(p32, ptri + HINDEX_LENGTH, length);
          Atomics.store(p32, ptri + HINDEX_BYTEOFFSET, byteOffset);
          Atomics.store(p32, ptri + HINDEX_BYTELENGTH, byteLength);
          Atomics.store(p32, ptri + HINDEX_BEGIN, begin);
          Atomics.store(p32, ptri + HINDEX_END, end);
          Atomics.store(p32, ptri + HINDEX_LOCKFREE, 1);
          Atomics.notify(p32, ptri + HINDEX_LOCKFREE);
        }
        // WeakMap -> {TypedArray} => ptri
        resolvs.set(this, ptri);
      }

    };
    BigUint64Array = class BigUint64Array extends self.BigUint64Array {
      constructor(arg0, byteOffset, length) {
        var arg0ByteLength, arg0Length, arg0Offset, argc, begin, bpel, byteLength, copyEnd, copyStart, end, nextByteLength, ptri;
        ptri = resolvCall();
        argc = arguments.length;
        bpel = 8;
        if (isThread) {
          length = Atomics.load(p32, ptri + HINDEX_LENGTH);
          byteOffset = Atomics.load(p32, ptri + HINDEX_BYTEOFFSET);
          super(objbuf, byteOffset, length);
        } else if (isBridge) {
          if (argc === 1) {
            // new TypedArray( 24 );
            // new TypedArray( buffer );
            // new TypedArray( [ 2, 4, 1 ] );
            if (Number.isInteger(arg0)) {
              // new TypedArray( 24 );

              //Atomics.wait p32, 4, 0, 2240; #testing locks
              length = arg0;
              byteLength = length * bpel;
              byteOffset = malloc(byteLength, bpel);
            } else if (ArrayBuffer.isView(arg0)) {
              // new TypedArray( new TypedArray(?) );

              //Atomics.wait p32, 4, 0, 2240; #testing locks
              byteLength = arg0.byteLength;
              length = arg0.byteLength / bpel;
              byteOffset = malloc(byteLength, bpel);
              if (arg0.buffer === objbuf) {
                ui8.copyWithin(byteOffset, arg0.byteOffset, arg0.byteOffset + byteLength);
              } else {
                ui8.set(arg0, byteOffset);
              }
            } else if (Array.isArray) {
              // new TypedArray( [ 2, 4, 1 ] )

              //Atomics.wait p32, 4, 0, 2240; #testing locks
              length = arg0.length;
              byteLength = length * bpel;
              byteOffset = malloc(byteLength, bpel);
              ui8.set(arg0, byteOffset);
            }
          } else if (argc === 3) {
            // new TypedArray( buffer, 1221, 4 );
            // new TypedArray( new TypedArra( 2 ), 36, 2 );
            if (ArrayBuffer.isView(arg0)) {
              // new TypedArray( new TypedArra( 2 ), 36, 2 );
              copyStart = arg0.byteOffset + byteOffset;
              copyEnd = copyStart + length * bpel;
              byteLength = length * bpel;
              byteOffset = malloc(byteLength, bpel);
              if (arg0.buffer === objbuf) {
                ui8.copyWithin(byteOffset, copyStart, copyEnd);
              } else {
                ui8.set(new self.Uint8Array(arg0.buffer, copyStart, length), byteOffset);
              }
            } else if (arg0.byteLength) {
              // new TypedArray( buffer, 36, 2 );
              arg0Offset = byteOffset;
              byteLength = length * bpel;
              if (arg0 !== objbuf) {
                byteOffset = malloc(byteLength, bpel);
                ui8.set(new self.Uint8Array(arg0, arg0Offset, byteLength), byteOffset);
              }
            }
          } else if (argc === 2) {
            // new TypedArray( buffer, 36 );
            // new TypedArray( new TypedArra( 2 ), 36 );
            if (ArrayBuffer.isView(arg0)) {
              // new TypedArray( new TypedArra( 2 ), 36 );
              arg0Length = arg0.length;
              arg0ByteLength = arg0.BYTES_PER_ELEMENT * arg0Length;
              copyStart = arg0.byteOffset + byteOffset;
              copyEnd = copyStart + arg0ByteLength;
              nextByteLength = arg0ByteLength - byteOffset;
              byteLength = nextByteLength;
              length = byteLength / bpel;
              byteOffset = malloc(byteLength, bpel);
              if (arg0.buffer === objbuf) {
                ui8.copyWithin(byteOffset, copyStart, copyEnd);
              } else {
                ui8.set(arg0, byteOffset);
              }
            } else if (arg0.byteLength) {
              // new TypedArray( buffer, 36 );
              arg0Offset = byteOffset;
              byteLength = arg0.byteLength - byteOffset;
              length = byteLength / bpel;
              if (arg0 !== objbuf) {
                byteOffset = malloc(byteLength, bpel);
              }
              if (arg0 !== objbuf) {
                ui8.set(new self.Uint8Array(arg0, arg0Offset), byteOffset);
              }
            }
          }
          super(objbuf, byteOffset, length);
          begin = byteOffset / bpel;
          end = begin + length;
          Atomics.store(p32, ptri + HINDEX_LENGTH, length);
          Atomics.store(p32, ptri + HINDEX_BYTEOFFSET, byteOffset);
          Atomics.store(p32, ptri + HINDEX_BYTELENGTH, byteLength);
          Atomics.store(p32, ptri + HINDEX_BEGIN, begin);
          Atomics.store(p32, ptri + HINDEX_END, end);
          Atomics.store(p32, ptri + HINDEX_LOCKFREE, 1);
          Atomics.notify(p32, ptri + HINDEX_LOCKFREE);
        }
        // WeakMap -> {TypedArray} => ptri
        resolvs.set(this, ptri);
      }

    };
    WebGL2RenderingContext = class WebGL2RenderingContext {
      constructor(canvas1) {
        this.canvas = canvas1;
        console.log(this);
      }

    };
    CanvasRenderingContext2D = (function() {
      class CanvasRenderingContext2D extends Uint32Array {
        constructor(width, height) {
          var c;
          super(32 + width * height);
          if (isThread) {
            Object.defineProperties(this, {
              canvas: {
                value: c = new self.OffscreenCanvas(width, height)
              },
              context: {
                value: c.getContext("2d")
              }
            });
          }
        }

        renderOn(element) {}

        fillText(text, x, y, maxWidth) {
          var ptri;
          ptri = resolvCall();
          if (isBridge) {
            resolvs.set(this, ptri);
            unlock(ptri);
            lock(ptri);
            return this;
          }
          if (isThread) {
            lock(ptri);
            this.context.fillText(text, x, y, maxWidth);
            addUint8(this.indexUint8(0), 1);
            if (this.isAsync || MAX_THREAD_COUNT === loadUint8(this.indexUint8(0))) {
              storeUint8(this.indexUint8(0), 0);
              return unlock(ptri);
            }
          }
        }

      };

      CanvasRenderingContext2D.prototype.INDEX_ISASYNC = 1 * 1; // Uint8

      Object.defineProperties(CanvasRenderingContext2D.prototype, {
        isAsync: {
          get: function() {
            return loadUint8(this.indexUint8(this.INDEX_ISASYNC));
          },
          set: function() {
            return storeUint8(this.indexUint8(this.INDEX_ISASYNC), arguments[0]);
          }
        }
      });

      return CanvasRenderingContext2D;

    }).call(this);
    OnscreenCanvas = (function() {
      class OnscreenCanvas extends Uint32Array {
        addFrame() {
          return addUint32(this.indexUint32(this.INDEX_FRAMECOUNT), 1);
        }

        render(handler) {
          var commit, gl, ptri;
          if (isThread) {
            return (function() {});
          }
          if (!this.isRendering) {
            this.isRendering = 1;
          }
          if (handler) {
            this.handler = handler;
          }
          if (!this.hasContext) {
            return;
          }
          [gl, handler, ptri] = [this.gl, this.handler, resolvs.get(this)];
          if (isBridge) {
            return (commit = () => {
              var frame;
              if (this.hasContext) {
                handler.call(this, gl, frame = this.addFrame());
              }
              return requestAnimationFrame(commit);
            })();
          }
        }

        constructor() {
          super(OnscreenCanvas.byteLength);
        }

        getContext(type) {
          var ptri;
          ptri = resolvCall();
          if (isThread) {
            lock(ptri); // for bridge
          } else {
            replies[ptri] = (canvas) => {
              Object.defineProperty(this, "screen", {
                value: canvas.getContext(type, {
                  powerPreference: "high-performance"
                })
              });
              this.hasContext = 1;
              return unlock(ptri);
            };
            postMessage({
              onscreen: {ptri}
            });
          }
          resolvs.set(this, ptri);
          switch (type) {
            case "2d":
              return this.getContext2d();
            case "webgl2":
              return this.getContextWebGL2();
          }
        }

        getContextWebGL2() {
          return this.gl = new WebGL2RenderingContext(this);
        }

        getContext2d() {
          return this.context = new CanvasRenderingContext2D(this);
        }

      };

      OnscreenCanvas.byteLength = 4 * 2;

      OnscreenCanvas.prototype.INDEX_HASCONTEXT = 0 * 1; // Uint8

      OnscreenCanvas.prototype.INDEX_ISRENDERING = 1 * 1; // Uint8

      OnscreenCanvas.prototype.INDEX_FRAMECOUNT = 1 * 4; // Uint32

      Object.defineProperties(OnscreenCanvas.prototype, {
        isRendering: {
          get: function() {
            return loadUint8(this.indexUint8(this.INDEX_ISRENDERING));
          },
          set: function() {
            return storeUint8(this.indexUint8(this.INDEX_ISRENDERING), arguments[0]);
          }
        },
        hasContext: {
          get: function() {
            return loadUint8(this.indexUint8(this.INDEX_HASCONTEXT));
          },
          set: function() {
            if (storeUint8(this.indexUint8(this.INDEX_HASCONTEXT), arguments[0])) {
              if (this.isRendering) {
                return this.render();
              }
            }
          }
        },
        frameCount: {
          get: function() {
            return loadUint32(this.indexUint32(this.INDEX_FRAMECOUNT));
          },
          set: function() {
            return storeUint32(this.indexUint32(this.INDEX_FRAMECOUNT), arguments[0]);
          }
        }
      });

      return OnscreenCanvas;

    }).call(this);
    return OffscreenCanvas = class OffscreenCanvas extends self.OffscreenCanvas {
      render(handler) {
        var commit;
        if (isBridge) {
          (commit = () => {
            var canvas, capture, ptri;
            ptri = resolvs.get(this);
            canvas = this.gl.canvas;
            handler.call(this.gl, ptri);
            capture = canvas.transferToImageBitmap.bind(canvas);
            postMessage({
              render: {
                ptri,
                imageBitmap: capture()
              }
            });
            return requestAnimationFrame(commit);
          })();
        }
        return function() {};
      }

      constructor() {
        var canvas, height, ptri, width;
        ptri = resolvCall();
        if (isThread) {
          lock(ptri);
          return new Proxy(OffscreenCanvas.prototype, {});
        } else {
          width = 256;
          height = 256;
          canvas = super(width, height);
          this.gl = canvas.getContext("webgl2");
          postMessage({
            offscreen: {width, height, ptri}
          });
          lock(ptri);
        }
        resolvs.set(this, ptri);
      }

    };
  };
  if (isWindow) {
    createCanvas = function(data) {
      var canvas, height, width;
      ({width = INNER_WIDTH, height = INNER_HEIGHT} = data);
      canvas = document.createElement("canvas");
      canvas.width = RATIO_PIXEL * width;
      canvas.height = RATIO_PIXEL * height;
      canvas.style.width = CSS.px(width);
      canvas.style.height = CSS.px(height);
      canvas.style.inset = CSS.px(0);
      canvas.style.position = "fixed";
      return document.body.appendChild(canvas);
    };
    sharedHandler = {
      hello: function() {
        return log("hello", ...arguments);
      },
      register: function(data) {
        warn("registering worker:", data);
        Object.assign(this.info, data);
        this;
        if (!workers.some(function(w) {
          return !w.info.uuid;
        })) {
          log("says it's onready time...", EVENT_READY);
          return bc.postMessage(EVENT_READY);
        }
      }
    };
    bridgeHandler = {
      document: function(data) {
        var args, key;
        for (key in data) {
          args = data[key];
          break;
        }
        switch (document[key].constructor) {
          case Function:
            return console.log(document[key].apply(document, [args].flat()));
        }
      },
      render: function(data) {
        return this[data.ptri].transferFromImageBitmap(data.imageBitmap);
      },
      onscreen: function(data) {
        var canvas, ptri;
        ptri = data.ptri;
        canvas = createCanvas(data).transferControlToOffscreen();
        return this.postMessage({
          onscreen: {canvas, ptri}
        }, [canvas]);
      },
      offscreen: function(data) {
        var canvas, context, ptri;
        ptri = data.ptri;
        canvas = createCanvas(data);
        context = canvas.getContext("bitmaprenderer");
        resolvs.set(this, ptri);
        this[ptri] = context;
        return unlock(ptri);
      }
    };
    threadHandler = {
      hello: function() {}
    };
    bridgemessage = function({data}) {
      var handler;
      for (request in data) {
        data = data[request];
        handler = bridgeHandler[request] || sharedHandler[request] || (function() {
          throw [/NO_HANDLER_FOR_BRIDGE/, request, data];
        })();
        return handler.call(this, data);
      }
    };
    threadmessage = function({data}) {
      var handler;
      for (request in data) {
        data = data[request];
        handler = threadHandler[request] || sharedHandler[request] || (function() {
          throw [/NO_HANDLER_FOR_THREAD/, request, data];
        })();
        return handler.call(this, data);
      }
    };
    createBuffers = function() {
      var Buffer, buffer, maxByteLength;
      Buffer = typeof SharedArrayBuffer !== "undefined" && SharedArrayBuffer !== null ? SharedArrayBuffer : ArrayBuffer;
      buffer = !(maxByteLength = BUFFER_TEST_START_LENGTH);
      while (!buffer) {
        try {
          buffer = new Buffer(0, {maxByteLength});
        } catch (error1) {
          maxByteLength /= BUFFER_TEST_STEP_DIVIDER;
        }
      }
      initMemory({
        objbuf: buffer,
        ptrbuf: new Buffer(Math.min(MAX_PTR_COUNT * BYTES_PER_ELEMENT, maxByteLength), {maxByteLength})
      });
      return Atomics.store(p32, 1, HEADERS_LENGTH);
    };
    createWorker = function(name, onmessage) {
      var worker;
      worker = new Worker(blobURL, {name});
      worker.info = {};
      worker.onerror = worker.onmessageerror = console.error;
      worker.onmessage = onmessage.bind(worker);
      return workers[workers.length] = worker;
    };
    createThreads = function() {
      var i, j, ref2, results, thread;
      bridge = createWorker("bridge", bridgemessage);
      bridge.postMessage({
        setup: {blobURL, objbuf, ptrbuf}
      });
      results = [];
      for (i = j = 0, ref2 = MAX_THREAD_COUNT; (0 <= ref2 ? j < ref2 : j > ref2); i = 0 <= ref2 ? ++j : --j) {
        thread = createWorker("thread" + i, threadmessage);
        results.push(thread.postMessage({
          setup: {blobURL, objbuf, ptrbuf}
        }));
      }
      return results;
    };
    createBlobURL = function() {
      var __0ptr, __user;
      __user = "\nconst onready = function () {\n\t" + `${[...self.document.scripts].find((d) => {
        return d.text && d.src;
      }).text.trim()}\n` + "};\n";
      __0ptr = "(" + `${self.init}`.split("return " + "0xdead;")[0];
      blobURL = URL.createObjectURL(new Blob([__0ptr, __user, "}).call(self);"], {
        type: "application/javascript"
      }));
      return delete self.init;
    };
    listenEvents = function() {
      window.onclick = function() {
        console.table(workers.map(function(w) {
          return w.info;
        }));
        console.warn("");
        console.log(objbuf);
        console.log(ptrbuf);
        console.log(p32);
        console.log(resolvs);
        return bc.postMessage(DUMP_WEAKMAP);
      };
      document.body.style.overscrollBehavior = "none";
      document.body.style.height = CSS.vh(100);
      return document.body.style.margin = 0;
    };
    queueMicrotask(function() {
      listenEvents();
      createBuffers();
      createBlobURL();
      return createThreads();
    });
  }
  if (isWorker) {
    HTMLElement = class HTMLElement {};
    HTMLDocument = class HTMLDocument {};
  }
  if (isBridge) {
    addEventListener("message", function(e) {
      var data, ptri, ref2, req, results, uuid;
      ref2 = e.data;
      results = [];
      for (req in ref2) {
        data = ref2[req];
        switch (req) {
          case "onscreen":
            ptri = data.ptri;
            results.push(replies[ptri](data.canvas));
            break;
          case "offscreen":
            results.push(log({data}));
            break;
          case "setup":
            uuid = randomUUID();
            blobURL = data.blobURL;
            initMemory(data);
            regenerate();
            results.push(postMessage({
              register: {selfName, isBridge, isThread, threadId, now, pnow, uuid}
            }));
            break;
          default:
            results.push(void 0);
        }
      }
      return results;
    });
  }
  if (isThread) {
    addEventListener("message", function(e) {
      var data, ref2, req, results, uuid;
      ref2 = e.data;
      results = [];
      for (req in ref2) {
        data = ref2[req];
        switch (req) {
          case "setup":
            uuid = randomUUID();
            blobURL = data.blobURL;
            initMemory(data);
            regenerate();
            results.push(postMessage({
              register: {selfName, isBridge, isThread, threadId, now, pnow, uuid}
            }));
            break;
          default:
            results.push(void 0);
        }
      }
      return results;
    });
  }
  bc.onmessage = function(e) {
    return {
      [EVENT_READY]: function() {
        return onready();
      },
      [DUMP_WEAKMAP]: function() {
        return log(resolvs);
      },
      [INIT_SCREEN]: function() {
        return log(arguments);
      }
    }[e.data]();
  };
  return 0xdead;
})();
